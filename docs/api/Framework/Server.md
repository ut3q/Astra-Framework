# Server

Server specific functions within the Astra Framework.

## Bootstrap

### :Start(moduleFolder: Folder, printsEnabled: boolean)

Calling this will launch the astra framework for the server.

printsEnabled-> Prints out the state that Astra is in, useful for debugging.

moduleFolder-> Where you store services.

## General

### :GrabService(serviceName: string): {}

Attempts to grab a service based of the name given, returns it if it's found.
