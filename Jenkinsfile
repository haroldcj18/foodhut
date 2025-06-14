pipeline {
    agent any

    environment {
        GIT_URL = 'https://github.com/haroldcj18/foodhut.git'
        RUTA_ZIP = 'build\\foodhut.zip'
    }

    stages {
        stage('Descargar código de GitHub') {
            steps {
                git url: "${env.GIT_URL}", branch: 'main'
            }
        }

        stage('Analizar con SonarQube') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    bat 'sonar-scanner.bat'
                }
            }
        }

        stage('Empaquetar código para producción') {
            steps {
                bat '''
                    rmdir /S /Q build 2>nul
                    mkdir build\\paquete

                    xcopy /E /I /Y * build\\paquete\\
                    powershell Compress-Archive -Path build\\paquete\\* -DestinationPath build\\codigo_produccion.zip
                '''
            }
        }
    }

    post {
        success {
            mail to: 'marycortes7766@gmail.com',
                subject: "✅ Pipeline exitoso - Foodhut",
                body: """La integración continua finalizó correctamente.

🔍 Análisis SonarQube: OK  
📦 Proyecto empaquetado exitosamente.

📁 Ruta del archivo ZIP:
${env.WORKSPACE}\\${env.RUTA_ZIP}
"""
        }
        failure {
            mail to: 'marycortes7766@gmail.com',
                subject: "❌ Falló el pipeline - Foodhut",
                body: "El proceso falló. Revisa Jenkins para más detalles."
        }
    }
}
