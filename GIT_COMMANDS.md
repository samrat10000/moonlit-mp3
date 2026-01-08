# Git & GitHub Command Reference

## 🚀 One-Time Setup (Already Done!)

```powershell
# Authenticate with GitHub
& "C:\Program Files\GitHub CLI\gh.exe" auth login

# Initialize Git in project
git init

# First commit and push
git add .
git commit -m "Initial commit: MoonLit Mp3"
& "C:\Program Files\GitHub CLI\gh.exe" repo create moonlit-mp3 --public --source=. --remote=origin --push
```

---

## 📝 Daily Commands (You'll Use These Often!)

### **Check Status**
```powershell
git status                    # See what files changed
```

### **Save Changes (Commit)**
```powershell
git add .                     # Stage all changes
git commit -m "Your message"  # Commit with description
```

### **Push to GitHub**
```powershell
git push                      # Upload changes to GitHub
```

### **Pull from GitHub**
```powershell
git pull                      # Download changes from GitHub
```

---

## 🔄 Common Workflow

```powershell
# After making changes to your code:

git add .
git commit -m "Added volume control"
git push
```

**That's it!** These 3 commands will update GitHub.

---

## 🌿 Branch Commands (Advanced)

```powershell
git branch feature-name       # Create new branch
git checkout feature-name     # Switch to branch
git checkout -b feature-name  # Create and switch in one command

git merge feature-name        # Merge branch into current branch
git branch -d feature-name    # Delete branch
```

---

## 📜 View History

```powershell
git log                       # See commit history
git log --oneline             # Compact view
```

---

## ↩️ Undo Commands

```powershell
git reset HEAD~1              # Undo last commit (keep changes)
git reset --hard HEAD~1       # Undo last commit (DELETE changes!)
git checkout -- filename      # Discard changes to a file
```

---

## 🔧 GitHub CLI Commands

```powershell
# View repo in browser
& "C:\Program Files\GitHub CLI\gh.exe" repo view --web

# Clone a repository
& "C:\Program Files\GitHub CLI\gh.exe" repo clone username/repo-name

# Create an issue
& "C:\Program Files\GitHub CLI\gh.exe" issue create

# View pull requests
& "C:\Program Files\GitHub CLI\gh.exe" pr list
```

---

## 💡 Pro Tips

### **Commit Message Best Practices**
```powershell
git commit -m "Add: New feature description"
git commit -m "Fix: Bug description"
git commit -m "Update: What you updated"
git commit -m "Remove: What you removed"
```

### **See What Changed**
```powershell
git diff                      # See uncommitted changes
git diff --staged             # See staged changes
```

### **Ignore Files**
Edit `.gitignore` to ignore files:
```
node_modules/
.env
*.log
```

---

## 🆘 If You Get Stuck

```powershell
git status                    # Always start here - shows current state
```

**Common errors:**
- "nothing to commit" → You haven't made any changes
- "fatal: remote origin already exists" → Remote is already set up
- "rejected" on push → Run `git pull` first, then `git push`

---

## 🎯 Your Most Common Commands

```powershell
# Daily workflow:
git add .
git commit -m "Description of changes"
git push

# Check status anytime:
git status

# View repo online:
& "C:\Program Files\GitHub CLI\gh.exe" repo view --web
```

---

**Your GitHub Repo:** https://github.com/samrat10000/moonlit-mp3

Keep this file handy! 🚀
