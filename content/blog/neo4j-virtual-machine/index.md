---
title: Installing Neo4j on a linux virtual machine
date: '2020-09-26T22:00:03.284Z'
description: 'Steps to install neo4j on a linux Virtual Machine and integrating APOC and Graph Data Science Libraries with it.'
categories: ['neo4j, virtual machine, graph, APOC']
---

![neo4j_logo](./logo.jpg)

Writing this post to keep track of the steps I followed while installing neo4j on an azure virtual machine (Linux).

### Create a Virtual Machine

Create a Linux virtual machine on a cloud provider of your choice. I used Microsoft Azure for the same. For the VM's on aws and other platforms, steps to install neo4j server will almost remain same. Useful [docs](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal) for creating a VM on azure.

### Connect to your Virtual Machine

After instantiating the VM, it will get started automatically. Use the public IP provided on the cloud provider's dashboard to connect remotely. There are various tools for the same. [Putty](https://www.putty.org/) is a very popular choice.

### Updating and Installing some required stuff

- **Update the package repository list**

```bash
sudo apt update
```

- **Installing JAVA:**
  I will be using OpenJDK 8. You can install JDK 11 if you want to use the newer neo4j version 4.x . I will be using neo4j ver 3.5.x .

```bash
sudo apt install openjdk-8-jdk
```

```bash
# To check the version
java -version
```

- **Installing neo4j:**
  First, we will be updating our package repositries and then simply installing the neo4j on our server.

```bash
# Run in sequence
sudo wget -O - https://debian.neo4j.org/neotechnology.gpg.key | sudo apt-key add -
sudo echo 'deb https://debian.neo4j.org/repo stable/' | sudo tee -a /etc/apt/sources.list.d/neo4j.list
sudo apt-get update
```

```bash
# Install neo4j
sudo apt install neo4j
# Check the version
neo4j --version
```

This will install neo4j on our linux VM (Using Debian here). These steps can vary with time. The official documentation for installing neo4j on Linux distros can be found [here](https://neo4j.com/docs/operations-manual/current/installation/linux/). You can also follow other methods like exploding a tarball and installing neo4j from it according to the use case you have.

### Steps to make this instance available over the internet

After installing neo4j server on our VM, we need to make it available over the Internet. From your cloud provider's dashboard, open the settings for the VM and in the networking tab, add specific inbound / outbound rules for the ports that we will be accessing over public Internet. In case of neo4j these will be `7474` and `7687`. For azure, you can follow these [docs](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nsg-quickstart-portal)

Now, we have to make changes in our neo4j.conf file to accept connections to our database from outside world.

Follow the below given steps to make the instance accessible over the required ports:

```bash
# Use sudo when ever necessary if you are the root user

# Open the conf file in your preferred editor
vi /etc/neo4j/neo4j.conf
```

```bash
# If you want to open the connection to all the outside ports, uncomment / add this line. (Use with caution!)
dbms.connectors.default_listen_address=0.0.0.0

# For specific ports that we need for our use case, add the following lines to open connection to these ports.
dbms.connector.bolt.enabled=true
dbms.connector.bolt.listen_address=0.0.0.0:7687
dbms.connector.http.enabled=true
dbms.connector.http.listen_address=0.0.0.0:7474

# If you have to disable authentication for some reason, uncomment / add the following
dbms.security.auth_enabled=false
```

Now use `sudo service neo4j restart` to start your neo4j with changes and access it over the URL `http://<ip/dns>:7474/browser/`.
Here, you can either use the IP address of your VM or the dns address you may have configured. As the IP address can be dynamic, dns should be preferred. Now, you should be able to run this neo4j server from your local machine. The default auth and password will be `neo4j` .

## Installing / Configuring APOC and GDS for our VM

[APOC](https://neo4j.com/labs/apoc/#:~:text=APOC%20is%20an%20add%2Don,all%20APOC%20functions%20and%20procedures) is an add-on library for Neo4j that provides hundreds of procedures and functions adding a lot of useful functionality.

[GDS](https://neo4j.com/docs/graph-data-science/current/introduction/) (Graph Data Science) library provides efficiently implemented, parallel versions of common graph algorithms for Neo4j, exposed as _Cypher_ procedures.

### Configure APOC

- Download the [APOC](https://github.com/neo4j-contrib/neo4j-apoc-procedures) jar file matching with your neo4j version (!required) and dump it in `/var/lib/neo4j/plugins`. You can use wget to download the jar file directly into the given directory.

- Run the following cmds on terminal for required permissions.

  - `chown neo4j:neo4j file.jar` (Use sudo if necessary. Here `file` is the downloaded jar)
  - `chmod 755 file.jar`

- Now edit the neo4j.conf file for exposing the APOC procedures.

```bash
# Uncomment / add the following line
dbms.security.procedures.whitelist=apoc.coll.*,apoc.load.*,apoc.*
```

- Restart you neo4j server using `sudo service neo4j restart`

## Configure GDS (Graph Data Science)

- Download the [GDS](https://neo4j.com/download-center/) jar file according to your [neo4j](https://neo4j.com/docs/graph-data-science/current/installation/#_supported_neo4j_versions) version. Dump this jar directly into `/var/lib/neo4j/plugins` .

- Now edit the neo4j.conf file for exposing the procedures.

```bash
# Uncomment / add the following line
dbms.security.procedures.unrestricted=gds.*
# This line in enhanced from apoc step
dbms.security.procedures.whitelist=apoc.coll.*,apoc.load.*,apoc.*,gds.*
```

- Restart you neo4j server using `sudo service neo4j restart`

- Check if it is properly intalled using `CALL gds.list()` to list all procedures.

> For various file locations info, use this official [docs](https://neo4j.com/docs/operations-manual/current/configuration/file-locations/#file-locations) link.

---

You are ready to go now. Let's make some graphs !!
_If any changes required for new updates, please make a pull request for the same. Thanks!_ 🕳️
