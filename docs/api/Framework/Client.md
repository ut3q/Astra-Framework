# Client

Client specific functions within the Astra Framework.

## Bootstrap

### :Start(moduleFolder: Folder, printsEnabled: boolean)

Calling this will launch the astra framework for the client.

printsEnabled-> Prints out the state that Astra is in, useful for debugging.

moduleFolder-> Where you store controllers.

## General

### :GrabController(controllerName: string): {}

Attempts to grab a controller based of the name given, returns it if it's found.

### :GrabService(moduleName: string): {}

Attempts to grab a client service based of the name given, returns it if it's found.

Client Service -> The client defined functions inside a service. Connects internally via RemoteFunctions.
