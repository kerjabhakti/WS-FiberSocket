# Package


go mod init wasocket

go mod tidy

## Publish
GOPROXY=proxy.golang.org

```sh
git tag v0.0.1
git push origin --tags
go list -m github.com/whatsauth/wasocket@v0.0.1
```
