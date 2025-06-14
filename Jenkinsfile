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
    post {
        success {
            mail to: 'marycortes7766@gmail.com',
                subject: "✅ Pipeline exitoso - Foodhut",
                body: "La integración continua finalizó correctamente."
        }
        failure {
            mail to: 'marycortes7766@gmail.com',
                subject: "❌ Falló el pipeline - Foodhut",
                body: "Revisa Jenkins para más detalles del error."
        }
    }    
}
