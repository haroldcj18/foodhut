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
            mail to: 'harold_cortes82172@elpoli.edu.co',
                subject: "✅ Pipeline exitoso - Foodhut",
                body: "La integración continua finalizó correctamente."
        }
        failure {
            mail to: 'harold_cortes82172@elpoli.edu.co',
                subject: "❌ Falló el pipeline - Foodhut",
                body: "Revisa Jenkins para más detalles del error."
        }
    }    
}
