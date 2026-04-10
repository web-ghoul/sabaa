module.exports = {
  apps: [
    {
      name: 'sabaa-backend',
      script: 'dist/src/main.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
