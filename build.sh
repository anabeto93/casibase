#!/bin/bash
#try to connect to google to determine whether user need to use proxy
curl www.google.com -o /dev/null --connect-timeout 5 2> /dev/null
if [ $? == 0 ]
then
    echo "Successfully connected to Google, no need to use Go proxy"
else
    echo "Google is blocked, Go proxy is enabled: GOPROXY=https://goproxy.cn,direct"
    export GOPROXY="https://goproxy.cn,direct"
fi
# Remove the toolchain line from go.mod if the Go version is 1.20 or 1.21
go version | grep -q "go1.2[01]" && sed -i '/^toolchain/d' go.mod
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o server .
