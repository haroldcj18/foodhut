pipeline {
    agent any

    stages {
        stage('Analizar con SonarQube') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    // Si estás en Windows:
                    bat 'sonar-scanner.bat'

                }
            }
        }
    }
}
