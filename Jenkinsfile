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

        stage('Empaquetar para Producción') {
            when {
                expression {
                    currentBuild.result == null || currentBuild.result == 'SUCCESS'
                }
            }
        stage('Empaquetar proyecto') {
            steps {
                bat '''
                    if exist "C:\\Users\\Harold\\Downloads\\foodhut_empaquetado.zip" del "C:\\Users\\Harold\\Downloads\\foodhut_empaquetado.zip"
                    powershell Compress-Archive -Path "C:\\Users\\Harold\\Downloads\\foodhut-master\\*" -DestinationPath "C:\\Users\\Harold\\Downloads\\foodhut_empaquetado.zip"
                '''
            }
   
                echo 'Código empaquetado correctamente.'
            
             }

        stage('Confirmación de Empaquetado') {
            when {
                expression {
                    currentBuild.result == null || currentBuild.result == 'SUCCESS'
                }
            }
            steps {
                mail to: 'marycortes7766@gmail.com',
                    subject: "📦 Proyecto empaquetado - Foodhut",
                    body: """El proyecto fue empaquetado correctamente.
Ruta del archivo ZIP:
${env.WORKSPACE}\\build\\codigo_produccion.zip"""
            }
        }
    }
}
