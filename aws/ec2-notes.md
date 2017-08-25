# AWS EC2 Notes


## Logging In

* Goto https://console.aws.amazon.com/console/home and enter your credentials.
  + UN: Likely an email address.
  + PW: Whatever you used.
* Click EC2 from Services menu.


## Connecting to an Instance

See http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html
for details.


## From Various Sources

**How to find out info about my Amazon Linux AMI**

After SSHing in, do one of the following:

```sh
cat /etc/issue
cat /etc/os-release
cat /etc/system-release
```
