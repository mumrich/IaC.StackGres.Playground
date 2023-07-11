# IaC.StackGres.Playground

## Prerequisites

- `choco install gsudo pwsh -y`

## Using CDKTF

```bash
cd cdktf

# load modules defined in cdktf.json and generate types
cdktf get

# deploy
cdktf deploy <stack-name> --auto-approve

# destroy
cdktf destroy <stack-name> --auto-approve
```

## Available TF Stacks

- starrocks
- stackgres
