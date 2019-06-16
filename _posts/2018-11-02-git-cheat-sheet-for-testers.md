---
layout: post
title:  "Git Commands Every Tester Should Know"
author: Amir
categories: [ technical testing ]
tags: [ git ]
image: assets/images/git-commands.jpg
---

This post is a Git Cheat Sheet with the most common Git commands you will likely use on a daily basis.

If you are a technical tester working alongside developers, you should be familiar with the basic Git commands.

This post contains enough Git knowledge to get you going on a day to day basis as a QA.

If you haven't got Git installed on your machine, you can follow the steps in [How to Install Git on Mac and Generate SSH Keys](https://www.testingexcellence.com/install-git-mac-generate-ssh-keys/).

## Initial Git Setup

### Initialize a repo

Create an empty git repo or re-initialize an existing one

```bash
$ git init
```

### Clone a repo

Clone the foo repo into a new directory called foo:

    $ git clone https://github.com/<username>/foo.git foo

## Git Branch

### How to Create a New Branch in Git

When you want to work on a new feature, you typically create a new branch in Git. As such, you generally want to stay off the master branch and work on your own feature branches so that master is always clean and you can create new branches from it.

To create a new branch use:

    $ git checkout -b <new_branch_name>

### How to List Branches in Git

If you want to know what branches are available in your working directory, then use:

    $ git branch

Example output

    develop
    my_feature
    master

### How to Switch Branches in Git

When you create a new branch then Git automatically switches to the new branch.

If you have multiple branches, then you can easily switch between branches with git checkout:

    $ git checkout master
    $ git checkout develop
    $ git checkout my_feature

### How to Delete Branches in Git

To delete a local branch:

    $ git branch -d <local_branch>

Use the `-D` option flag to force it.

To delete a remote branch on origin:

    $ git push origin :<remote_branch>

## Git Staging

To _stage_ a file is simply to prepare it for a commit. When you add or modify some files, you need to stage those changes into "the staging area." Think of staging as a box where you put things in before shoving it under your bed, where your bed is a repository of boxes you've previously have shoved in.

### Git Stage Files

To stage or simply add files, you need to use git add command. You can stage individual files:

    $ git add foo.js

or all files at once:

    $ git add .

### Git Unstage Changes

If you want to remove a certain file from the stage:

    $ git reset HEAD foo.js

Or remove all staged files:

    $ git reset HEAD .

You can also create an alias for a command and then use it with Git:

    $ git config --global alias.unstage 'reset HEAD'
    $ git unstage .

## Git Status

If you want to see what files have been created, modified or deleted, Git status will show you a report.

    $ git status

## Git Commits

It is a good practice to commit often. You can always squash down your commits before a push. Before you commit your changes, you need to stage them.

The commit command requires a -m option which specifies the commit message.

You can commit your changes like:

    $ git commit -m "Updated README"

### Undoing Commits

The following command will undo your most recent commit and put those changes back into staging, so you don't lose any work:

    $ git reset --soft HEAD~1

To completely delete the commit and throw away any changes use:

    $ git reset --hard HEAD~1

### Squashing Commits

Let's say you have 4 commits, but you haven't pushed anything yet and you want to put everything into one commit, then you can use:

    $ git rebase -i HEAD~4

The `HEAD~4` refers to the last four commits.

The `-i` option opens an interactive text file.

You'll see the word "pick" to the left of each commit. Leave the one at the top alone and replace all the others with "s" for squash, save and close the file.

Then another interactive window opens where you can update your commit messages into one new commit message.

## [](https://gist.github.com/jedmao/5053440#pushing)Git Push

After you have committed your changes, next is to push to a remote repository.

### First Push

Push a local branch for the first time:

    $ git push --set-upstream origin <branch>

After that, then you can just use

    $ git push

### Push local branch to different remote branch

To push a local branch to a different remote branch, you can use:

    $ git push origin <local_branch>:<remote_branch>

### Undo Last Push

If you have to undo your last push, you can use:

    $ git reset --hard HEAD~1 && git push -f origin master

## Git Fetch

When you use `git fetch`, Git doesn't merge other commits them with your current branch. This is particularly useful if you need to keep your repository up to date, but are working on something that might break if you update your files.

To integrate the commits into your master branch, you use `merge`.

### Fetch changes from upstream:

    $ git fetch upstream

## Git Pull

Pulling is just doing a fetch followed by a merge. When you use `git pull`, Git automatically merges other commits without letting you review them first. If you don’t closely manage your branches, you may run into frequent conflicts.

### Pull a branch

If you have a branch called `my_feature` and you want to pull that branch, you can use:

    $ git pull origin/my_feature

### Pull everything

Or, if you want to pull everything and all other branches

    $ git pull

## Git Merging and Rebasing

When you run `git merge`, your HEAD branch will generate a **new commit**, preserving the ancestry of each commit history.

The **rebase** re-writes the changes of one branch onto another _without_ creating a new commit.

### Merge Master Branch to Feature Branch

    $ git checkout my_feature
    $ git merge master

Or with rebase option, you use:

    $ git checkout my_feature
    $ git rebase master

### Merge Feature Branch to Master Branch

    $ git checkout master
    $ git merge my_feature

## Git Stash

Sometimes you make changes on a branch, and you want to switch to another branch, but you don't want to lose your changes.

You can stash your changes. Here's how you do a stash in Git:

    $ git stash

Now, if you want to unstash those changes and bring them back into your working directory use:

    $ git stash pop
