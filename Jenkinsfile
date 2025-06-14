pipeline {
    agent any

    environment {
        RUTA_PROYECTO = 'C:\\Users\\Harold\\Downloads\\foodhut-master'
        RUTA_ZIP = 'C:\\Users\\Harold\\Downloads\\foodhut_empaquetado.zip'
    }

    stages {
        stage('Análisis SonarQube') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    bat 'sonar-scanner.bat'
                }
            }
        }

        stage('Empaquetar proyecto') {
            steps {
                bat '''
                    if exist "C:\\Users\\Harold\\Downloads\\foodhut_empaquetado.zip" del "C:\\Users\\Harold\\Downloads\\foodhut_empaquetado.zip"
                    powershell Compress-Archive -Path "C:\\Users\\Harold\\Downloads\\foodhut-master\\*" -DestinationPath "C:\Users\Harold\Downloads\Empaquetamiento\\foodhut_empaquetado.zip"
                '''
            }
        }
    }

    post {
        success {
            mail to: 'marycortes7766@gmail.com',
                subject: "✅ Foodhut - Pipeline completado",
                body: """Todo finalizó correctamente.

📦 Proyecto empaquetado como .zip.

🔗 Ruta:
C:\\Users\\Harold\\Downloads\\foodhut_empaquetado.zip
"""
        }
        failure {
            mail to: 'marycortes7766@gmail.com',
                subject: "❌ Error en pipeline - Foodhut",
                body: "El proceso falló. Revisa Jenkins para más detalles."
        }
    }
}
