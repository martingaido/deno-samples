/* Run: deno run uuid.ts */

import { v4 } from "https://deno.land/std/uuid/mod.ts";

// Generate a v4 uuid
const myUUID = v4.generate();
console.log(myUUID);

// Validate a v4 uuid
const isValid = v4.validate(myUUID);
console.log(isValid);