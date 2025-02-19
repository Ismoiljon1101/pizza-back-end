module.exports = {
apps: [{
    name: 'app',
    script: './index.js',  // Entry point of your application
    instances: 'max',       // Number of instances to run (or "max" for all CPU cores)
    autorestart: true,      // Automatically restart app if it crashes
    watch: false,           // Enable/disable file watching
    max_memory_restart: '1G', // Restart if memory exceeds 1GB
    env: {
    NODE_ENV: 'development',
    },
    env_production: {
    NODE_ENV: 'production',
    }
}],

// Example deployment configuration (optional)
deploy: {
    production: {
    user: 'SSH_USERNAME',
    host: 'SSH_HOSTMACHINE',
    ref: 'origin/main',
    repo: 'GIT_REPOSITORY_URL',
    path: 'DESTINATION_PATH',
    'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
}
};

