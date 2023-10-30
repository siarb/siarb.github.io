# Mermaid other types MD

```
maven {
        url = uri("https://packages.jetbrains.team/maven/p/crl/maven")
        credentials {
            username = System.getenv("JB_SPACE_CLIENT_ID")
            password = System.getenv("JB_SPACE_CLIENT_SECRET")
        }
    }
implementation("com.google.code.gson:gson:2.10.1")
```