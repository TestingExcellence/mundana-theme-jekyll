---
layout: post
title:  "SCP and Rsync - Transfer Files From Local to Remote"
author: Amir
categories: [ linux ]
image: assets/images/scp-rsync-linux-transfer-files.jpg
---

SCP (Secure Copy) and Rsync are two commands that can be used in transferring files between two machines.

For example, we can copy a file or directory from local to remote or from remote to local systems.

When using `scp` to transfer files, everything is encrypted so sensitive details are not exposed.

In this tutorial, we give examples of how to use `scp` and `rsync` commands to transfer files.

## SCP (Secure Copy)

**`scp`** copies files between hosts on a network.
 
It uses ssh(1) for data transfer, and uses the same authentication and provides the same security as ssh(1).

The `scp` command relies on `ssh` for data transfer, therefore it requires an ssh key or password to authenticate on the remote systems.

**[You can read more on how to set up ssh keys.](https://www.testingexcellence.com/install-git-mac-generate-ssh-keys/)**

The general syntax and usage of `scp` is:

```bash
scp [OPTION] [user@]local:]file1 [user@]remote:]file2
```

`scp` provides a number of options which are [explained in more detail](https://linux.die.net/man/1/scp).

### Transfer Files from Local to Remote with SCP

To copy or transfer a file from a local machine to a remote machine, run the following command:

```bash
scp image.png remote_username@10.10.0.1:/remote/directory
```

Where:

*   **image.png** is the name of the file we want to transfer from local to remote,
*   **remote_username** is the user on the remote server,
*   **10.10.0.1** is the server IP address,
*   /**remote/directory** is the path to the directory we want to copy the file to.

**Note:** If you don’t specify a remote directory, the file will be copied to the remote user home directory.

When you press enter, you will be prompted to enter the remote user password and the transfer will start.

Omitting the filename from the destination location copies the file with the original name. If you want to save the file under a different name you need to specify a new name:

For example:

```bash
scp image1.png remote_username@10.10.0.1:/remote/directory/new_image.png
```

### Transfer Files from Remote to Local with SCP

To transfer a file from a remote machine to your local machine, run the following command:

```bash
scp remote_username@10.10.0.1:/remote/directory/new_image.png /local/directory
```
### Transfer a Directory Recursively from Local to Remote

To transfer a directory and all it's contents from a local machine to a remote host, use the following command:

```bash
scp -rp sourcedirectory user@dest:/path
```

NB: This creates the sourcedirectory inside /path thus the files will be in /path/sourcedirectory

## Rsync

Like `scp`, `rsync` is used to copy files either to or from a remote host, or locally on the current host.

`rsync` is generally used to transfer large files.

### Transfer a File from Local to Remote with Rsync

To copy a file from your local machine to a remote host with `rsynch`, run the following command

```bash
rsync -ave ssh mydirectory remote_user@10.10.0.2:/remote/directory/
```

## Conclusion

In this tutorial, you learned how to use the `scp` and `rsync` command to copy files and directories between two machines.