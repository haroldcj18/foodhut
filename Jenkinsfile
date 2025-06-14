pipeline {
    agent any

    stages {
        stage('Analizar con SonarQube') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    bat 'sonar-scanner.bat'
                }
            }
        }

        stage('Notificar resultado del análisis') {
            steps {
                script {
                    if (currentBuild.result == null || currentBuild.result == 'SUCCESS') {
                        mail to: 'marycortes7766@gmail.com',
                            subject: "✅ Análisis exitoso - Foodhut",
                            body: "El análisis de código con SonarQube finalizó correctamente."
                    } else {
                        mail to: 'marycortes7766@gmail.com',
                            subject: "❌ Falló el análisis - Foodhut",
                            body: "Revisa los resultados del análisis SonarQube en Jenkins."
                    }
                }
            }
        } 
post {
    always {
        mail to: 'marycortes7766@gmail.com',
            subject: "🚀 Proyecto desplegado - Foodhut",
            body: "El proyecto ha sido desplegado correctamente en Tomcat: http://localhost:8090/foodhut"
    }
}          
   
            }
        }
