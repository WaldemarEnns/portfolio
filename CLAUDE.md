# Claude Rules

## Branch & PR Awareness
Before suggesting new tasks or ideas, always check open PRs and origin branches:
```bash
gh pr list --state open
git branch -r
```
This avoids proposing work that is already in progress or covered by an existing PR/branch.
