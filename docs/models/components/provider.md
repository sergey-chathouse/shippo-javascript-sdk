# Provider

To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set `provider` to `FEDEX`, `UPS`, or `ONTRAC`.

## Example Usage

```typescript
import { Provider } from "shippo/models/components";

let value: Provider = "FEDEX";
```

## Values

```typescript
"FEDEX" | "UPS" | "ONTRAC"
```