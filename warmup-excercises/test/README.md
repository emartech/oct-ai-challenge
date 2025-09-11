# Test AI Endpoint Connectivity

First you need to test if your machine can reach the SAP AI Hub and verify the endpoint is responding correctly.

## Quick Test

Run this command to test the connection:

```bash
docker run --rm ai-proxy:latest test
```

## Expected Output

If the connection is successful, you should see:

```
Testing AI endpoint connection...
✅ Connection successful
✅ Model responding correctly
✅ Ready to proceed with exercises
```

## Troubleshooting

### Docker Image Not Found
```bash
docker pull registry.company.internal/ai-proxy:latest
```

### Connection Failed
- Verify you're on the corporate network or VPN
- Check with your IT administrator for access permissions
- Ensure Docker is running properly

### Permission Denied
```bash
docker run --rm --network host ai-proxy:latest test
```

## Next Steps

Once the test passes, you're ready to start the exercises:
1. [Basic](../basic/) - Simple prompt interactions
2. [JSON](../json/) - Structured data handling
3. [Agent](../agent/) - Build autonomous agents

---

*Questions? Reach out on Slack #guild-ai*