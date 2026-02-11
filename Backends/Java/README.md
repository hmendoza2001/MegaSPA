# HOW TO RUN
- mvnw clean (deletes any previous builds)
- mvnw clean install (downloads dependencies if necessary)
- or mvnw clean install -DskipTests
- mvnw compile
- mvnw install (creates jar)
- or mvnw install -DskipTests
- mvnw exec:java -Dexec.mainClass="com.example.javaApi.DemoApplication"
