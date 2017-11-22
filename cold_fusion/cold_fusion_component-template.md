
```cfc
<cfcomponent>
  <!---
  You can write code on the component page that is outside `cffunction`
  definitions.  This code executes when the CFC is instantiated or whenever you
  invoke a method of the CFC.
  --->

  <cffunction name="init" access="public" output="false">
    <cfargument name="param1" type="..." required="true|false">
    <cfargument name="param2" type="..." default="...">
    ...
    <cfreturn This>
  </cffunction>

  <cffunction name="" access="public" output="false" returntype="...">
    ...
    <cfreturn ...>
  </cffunction>
</cfcomponent>
```
