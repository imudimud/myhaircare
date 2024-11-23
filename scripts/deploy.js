const { execSync } = require('child_process');
const chalk = require('chalk');

// Configuration
const config = {
  productionBranch: 'main',
  stagingBranch: 'staging',
  buildCommand: 'npm run build',
  testCommand: 'npm run test',
  lintCommand: 'npm run lint',
  formatCommand: 'npm run format',
};

// Utility functions
const log = {
  info: (msg) => console.log(chalk.blue(`ℹ ${msg}`)),
  success: (msg) => console.log(chalk.green(`✓ ${msg}`)),
  error: (msg) => console.log(chalk.red(`✗ ${msg}`)),
  warning: (msg) => console.log(chalk.yellow(`⚠ ${msg}`)),
};

const run = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    log.error(`Failed to execute: ${command}`);
    log.error(error.message);
    return false;
  }
};

// Deployment steps
const steps = {
  checkBranch: () => {
    const currentBranch = execSync('git branch --show-current').toString().trim();
    if (![config.productionBranch, config.stagingBranch].includes(currentBranch)) {
      throw new Error(`Must be on ${config.productionBranch} or ${config.stagingBranch} branch`);
    }
    return currentBranch;
  },

  checkChanges: () => {
    const status = execSync('git status --porcelain').toString();
    if (status) {
      throw new Error('Working directory is not clean. Commit or stash changes first.');
    }
  },

  runTests: () => {
    log.info('Running tests...');
    if (!run(config.testCommand)) {
      throw new Error('Tests failed');
    }
  },

  lint: () => {
    log.info('Running linter...');
    if (!run(config.lintCommand)) {
      throw new Error('Linting failed');
    }
  },

  format: () => {
    log.info('Running formatter...');
    if (!run(config.formatCommand)) {
      throw new Error('Formatting failed');
    }
  },

  build: () => {
    log.info('Building application...');
    if (!run(config.buildCommand)) {
      throw new Error('Build failed');
    }
  },

  validateSchema: () => {
    log.info('Validating schema markup...');
    // Add schema validation logic here
  },

  checkTranslations: () => {
    log.info('Checking translations...');
    // Add translation validation logic here
  },

  deploy: (environment) => {
    log.info(`Deploying to ${environment}...`);
    const deployCommand = environment === 'production' 
      ? 'vercel --prod' 
      : 'vercel';
    
    if (!run(deployCommand)) {
      throw new Error(`Deployment to ${environment} failed`);
    }
  },
};

// Main deployment function
async function deploy() {
  try {
    const branch = steps.checkBranch();
    const environment = branch === config.productionBranch ? 'production' : 'staging';

    log.info(`Starting ${environment} deployment...`);

    steps.checkChanges();
    steps.lint();
    steps.format();
    steps.runTests();
    steps.validateSchema();
    steps.checkTranslations();
    steps.build();
    steps.deploy(environment);

    log.success(`Successfully deployed to ${environment}! 🚀`);
  } catch (error) {
    log.error('Deployment failed!');
    log.error(error.message);
    process.exit(1);
  }
}

// Run deployment
deploy();
