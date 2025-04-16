
![Spring security](/assets/images/spring-security/spring-security.png)
# 🛡️ Building Secure APIs with Spring Boot

In today’s API-driven applications, security isn’t just an add-on — it’s a core requirement. Whether you're building public REST APIs or internal microservices, ensuring only authorized users can access your data is critical. In this blog, we'll explore how to build secure APIs with Spring Boot using Spring Security, JWT (JSON Web Tokens), and role-based access control.

![Spring security flow](/assets/images/spring-security/spring-security-flow.jpg)

## 🔍 Why API Security Matters

APIs are the gateway to your application’s data and functionality. Without proper security:

- Anyone could access sensitive data.

- APIs could be abused (e.g., brute force, injection attacks).

- You could be open to data breaches, legal issues, and loss of trust.

![data breach](/assets/images/spring-security/data-breach.jpg)


## 🏗️ Tools & Tech Stack

- Spring Boot

- Spring Security

- JWT (JSON Web Token)

- H2 or PostgreSQL (for persistence)

- Lombok (optional for reducing boilerplate)

![spring tools](/assets/images/spring-security/spring-security-jwt.jpg)


## 🔐 Security Concepts in Spring Boot

Spring Security provides:

- `Authentication` – Who are you?

- `Authorization` – What can you do?

- `Password encoding`

- `Security filters` and `configuration`

![spring authentication](/assets/images/spring-security/spring-authentication.svg)


## 🧱 Project Setup

Use Spring Initializr and include:

- Spring Web

- Spring Security

- Spring Data JPA

- H2/Mongo/PostgreSQL

- Lombok (optional)

```bash
https://start.spring.io/
```

## 🧑‍💻 User Entity Example

```java
@Entity
public class User {
    @Id @GeneratedValue
    private Long id;

    private String username;
    private String password;
    private String role; // e.g., ROLE_USER, ROLE_ADMIN
}
```

## 🔑 Configure Password Encoder

```java
    @Override
    public String encode(CharSequence rawPassword) {
        byte[] result = SecretKeyFactory.getInstance("xyzabcdefg")
                .generateSecret(new PBEKeySpec(rawPassword.toString().toCharArray(), secretkey.getBytes(), iteration, keyLength))
                    .getEncoded();
        return Base64.getEncoder().encodeToString(result);
    }
```

## 🔒 JWT Authentication Flow

- User sends credentials to /login

- If valid, generate JWT token

- User sends token in Authorization: Bearer <token> header

- Server verifies token before processing the request

![jwt flow](/assets/images/spring-security/spring-access-flow.png)

## 🧾 Create JWT Utility

```java
@Component
public class JwtUtil {
    private final String SECRET = "my-secret-key";

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 day
                .signWith(SignatureAlgorithm.HS256, SECRET)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token)
                .getBody().getSubject();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        return extractUsername(token).equals(userDetails.getUsername());
    }
}
```

## 🔧 Secure Endpoints

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeHttpRequests()
            .requestMatchers("/login", "/register").permitAll()
            .requestMatchers("/admin/**").hasRole("ADMIN")
            .anyRequest().authenticated()
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
```

## 📌 Exposing API Endpoints

```java
@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/user")
    public String userAccess() {
        return "Welcome, authenticated user!";
    }

    @GetMapping("/admin")
    public String adminAccess() {
        return "Welcome, admin user!";
    }
}
```


## 🧪 Test with Postman

- POST /login → Get token

- Use token in header

```bash
Authorization: Bearer <your-token>
```

- Access /api/user or /api/admin depending on role


## 🧯 Additional Security Tips

- Use HTTPS in production

- Limit login attempts (to prevent brute force attacks)

- Sanitize input to prevent injection attacks

- Set proper CORS headers for frontend/backend integration

- Store secrets securely using Spring Vault or environment variables


## ✅ Summary


Building `secure APIs` in Spring Boot involves:

- Setting up authentication and authorization

- Implementing JWT-based security

- Securing endpoints based on roles

- Applying additional best practices to harden your API

![summary](/assets/images/spring-security/spring-stack.png)

`Spring Boot`, along with` Spring Security` and `JWT`, provides a flexible and powerful platform for securing APIs effectively and efficiently.