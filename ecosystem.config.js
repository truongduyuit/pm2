require('dotenv').config()
const MONGODB_URL = process.env.MONGODB_URL

module.exports = {
  apps: [{
    script: 'index.js',
    env_production: {
      NODE_ENV: 'production',
      MONGODB_URL,
    }
  }],

  deploy: {
    production: {
      user: 'duycnt',
      host: '150.95.105.222',
      ref: 'origin/master',
      repo: 'https://github.com/truongduyuit/test-jenkins.git',
      path: '/home/duycnt',
      'pre-deploy': 'git pull',
      'post-deploy': "npm install" +
        " && pm2 startOrRestart ecosystem.config.js" +
        " && pm2 save"
    }
  }
};
