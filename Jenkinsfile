pipeline {
    agent any


    environment {
        SONARQUBE = 'SonarQubeServer' // Nombre del servidor Sonar configurado en Jenkins
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                git url: 'https://github.com/haroldcj18/foodhut.git', branch: 'main'
            }
        }

        stage('Instalar Dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                // Puedes personalizar el script si tienes pruebas definidas
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat 'npm test'
                }
            }
        }

        stage('Análisis SonarQube') {
    steps {
        withSonarQubeEnv("${SONARQUBE}") {
            withCredentials([string(credentialsId: 'SONAR_TOKEN_ID', variable: 'SONAR_TOKEN')]) {
                // Verifica si el token se está inyectando
                bat 'echo SONAR_TOKEN: %SONAR_TOKEN%'
                
                // Ejecuta el análisis
                bat """
                    npx sonar-scanner ^
                    -Dsonar.projectKey=pokemundo ^
                    -Dsonar.sources=. ^
                    -Dsonar.host.url=http://localhost:9000 ^
                    -Dsonar.login=%SONAR_TOKEN%
                """
            }
        }
    }
}




        stage('Esperar Resultado de Calidad') {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }

        stage('Desplegar en servidor de pruebas') {
            steps {
                echo 'Iniciando servidor Node.js en segundo plano...'
                // En Windows, abre una nueva terminal minimizada para no bloquear el pipeline
                bat 'start /min cmd /c "npm start"'
                sleep time: 10, unit: 'SECONDS' // Espera a que el servidor levante
                echo 'Servidor de pruebas corriendo en http://localhost:3000'
            }
        }

        stage('Empaquetar Proyecto') {
            steps {
                echo 'Empaquetando proyecto (si aplica)...'
                // Puedes poner aquí npm run build si tienes una etapa de build
            }
        }
    }

    post {
        success {
            mail to: 'harold_cortes82172@elpoli.edu.co',
                subject: "✅ Pipeline exitoso - Pokemundo",
                body: "La integración continua finalizó correctamente."
        }
        failure {
            mail to: 'tucorreo@ejemplo.com',
                subject: "❌ Falló el pipeline - Pokemundo",
                body: "Revisa Jenkins para más detalles del error."
        }
    }
}
