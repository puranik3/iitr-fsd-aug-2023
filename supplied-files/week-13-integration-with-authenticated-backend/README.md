## Getting started with the backend

## Step 1: Create the Spring Boot starter project

-   Go to https://start.spring.io/ and create a project with the following settings.

```
Group: com.greatlearning.security
Artifact: spring-boot-security
Description: Demo project for Spring Boot Security
```

-   Also choose Maven Project, Java 17, and packaging as Jar.
-   Download the generated project

-   Import the project into IntelliJ (or you can use Eclipse/Netbeans etc. The steps explained here assume IntelliJ).

## Step 2: Add the dependencies

-   `pom.xml` - Add the following

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.security</groupId>
        <artifactId>spring-security-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>jakarta.persistence</groupId>
        <artifactId>jakarta.persistence-api</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt</artifactId>
        <version>0.9.1</version>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <excludes>
                    <exclude>
                        <groupId>org.project-lombok</groupId>
                        <artifactId>lombok</artifactId>
                    </exclude>
                </excludes>
            </configuration>
        </plugin>
    </plugins>
</build>
```

-   Make sure to "Load Maven changes" (the button that appears, once you add the dependencies, on the top right corner of the open file in the editor).

## Run the app

-   `SpringBootSecurityApplication` - Right click on the file and run. Enable annotations processing in the dialog that may pop up - Lombok requires this to work.

-   Spring Security generates a default user called `user`. Note the password displayed in the terminal at startup.
-   Visit `localhost:8080`

## Add a home page

-   `resources/application.properties`

```
spring.application.name=spring-boot-security

jwt.signing.key.secret=mySecret
jwt.get.token.uri=/authenticate
jwt.refresh.token.uri=/refresh
jwt.http.request.header=Authorization
jwt.token.expiration.in.seconds=604800

spring.datasource.url=jdbc:h2:mem:todolistDB
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=admin
spring.datasource.password=

spring.jpa.defer-datasource-initialization=true
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.show-sql=true

spring.h2.console.enabled=true
```

## Add a home page

-   `resources/static/index.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Todos API</title>
    </head>
    <body>
        <h1>Todos API</h1>
        <hr />
        This API server serves the todos data required by the Todos Application
    </body>
</html>
```

-   Restart the app. Now you can login (using the `user` username and the new password in terminal), and view the home page on `http://localhost:8080`

## Add Todo POJO

-   `todo` - Create a package called `todo`
-   `todo/Todo.java` - Create a Todo POJO

```java
package com.gl.rest.webservices.restfulwebservices.todo;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Todo {
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String description;
	private Date targetDate;

	public Todo() {

	}

	public Todo(long id, String username, String description, Date targetDate) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (id != other.id)
			return false;
		return true;
	}
}
```

## Add TodoJpaRepository

-   `todo/TodoJpaRepository.java`

```java
package com.greatlearning.security.spring_boot_security.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>{
    List<Todo> findByUsername(String username);
}
```

## Add TodoJpaResource

-   `todo/TodoJpaResource.java`

```java
package com.greatlearning.security.spring_boot_security.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TodoJpaResource {

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoJpaRepository.findByUsername(username);
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoJpaRepository.findById(id).get();
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        todoJpaRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
                                           @RequestBody Todo todo) {
        todo.setUsername(username);

        todoJpaRepository.save(todo);

        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
        todo.setUsername(username);

        Todo createdTodo = todoJpaRepository.save(todo);

        // Location
        // Get current resource url
        // {id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }
}
```

-   The todos (array of Todo objects) resource can now be served. Check `http://localhost:8080/jpa/users/user/todos`. However, we have no data right now.

## Add seed data and application properties

-   `resources/data.sql`

```
insert into todo(id, username,description,target_date)
values(101, 'user', 'Learn Driving', NOW());

insert into todo(id, username,description,target_date)
values(102, 'user', 'Complete Reading Book', NOW());

insert into todo(id, username,description,target_date)
values(103, 'user', 'Run 5 Km', NOW());
```

-   Check `http://localhost:8080/jpa/users/user/todos`. You have some data now.

## Add the login Request POJO

-   `jwt/resource/JwtTokenRequest.java`

```java
package com.greatlearning.security.spring_boot_security.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
```

## Add the login Response POJO

-   `jwt/resource/JwtTokenResponse.java`

```java
package com.greatlearning.security.spring_boot_security.jwt.resource;

import java.io.Serializable;

public class JwtTokenResponse implements Serializable {

    private static final long serialVersionUID = 8317676219297719109L;

    private final String token;

    public JwtTokenResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }
}
```

## Add the authentication controller that generates and returns a token on login endpoint

-   `jwt/resource/AuthenticationException.java`

```java
package com.greatlearning.security.spring_boot_security.jwt.resource;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}

```

-   `jwt/resource/JwtAuthenticationRestController.java`
```java

```

## References

-   https://bootify.io/spring-security/rest-api-spring-security-with-jwt.html
-   https://stackoverflow.com/questions/56388865/spring-security-configuration-httpsecurity-vs-websecurity
