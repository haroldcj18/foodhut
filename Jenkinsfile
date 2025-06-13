pipeline {
    agent any

    tools {
        sonarQube 'SonarLocal' 
    }

    stages {
        stage('Analizar con SonarQube') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    sh 'sonar-scanner'
                }
            }
        }
    }
}
