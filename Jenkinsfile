pipeline {
  agent any
  tools {
    nodejs 'Node'
  }
  stages {
    stage('Clone Code') {
      steps {
        git branch: 'master', url: 'https://github.com/josphat-n/gallery.git'
      }
    }
    stage('Build Code') {
      steps {
        sh 'npm i'
      }
    }
    stage('Test Code') {
      steps {
        sh 'npm test'
      }
    }
    stage('Slack Notification') {
      steps {
        slackSend color: 'good', message: "${env.JOB_NAME} ${env.BUILD_NUMBER} built successfully."
      }
    }
  }
}