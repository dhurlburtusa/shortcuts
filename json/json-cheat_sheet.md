# JSON Cheat Sheet


## Server-Side Prefixing

Many times a server will prefix the JSON response they generate to prevent XSSI attacks. See https://security.stackexchange.com/questions/110539/how-does-including-a-magic-prefix-to-a-json-response-work-to-prevent-xssi-attack
for more details.

Spring 4.2 changed the JSON prefix from `"{} && "` to the safer `")]}', "`.
