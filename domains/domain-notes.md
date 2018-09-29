# Domain Notes


## Transfers

Domain transfers can take anywhere from 30 minutes to 8 days to complete.  The
exact time-frame depends on the domain's TLD and the time required for your
current registrar to complete the process. 

**Preparation**

A transfer can be completely seemless if some preparation is done before
initiating the transfer process.

Be sure the nameservers for the domain-to-be-transferred points to the
nameservers you will ultimately be using or some temporary nameservers that
don't belong to the registrar you are leaving.  Once this is done and has
propagated through the DNS, then you can safely initiate the transfer process by
following the generic steps below.

Take note of some information/configuration that may need to be manually
transferred. The following is a brief list meant as a reminder:

- Assets
  + Cron Jobs
  + Databases
  + Error Pages
  + Files
  + Public/Private Keys
  + SSL Certs
  + Web Server Configs
- Email account
  + Forwarders
  + Auto Responders
  + Filters

**Steps**

1)  Verify the Domain's Eligibility for Transfer

    + The domain must have been registered or transferred at least 60 days ago;
    + The domain must be unlocked at the current registrar (its Whois status should
      read OK or Active);

2)  Order the Transfer

    For this, you'll need to obtain the auth/EPP code for the domain from your
    registrar.

    Initiate the transfer from the registrar.  At some point in the process, you'll
    be prompted to enter the auth/EPP code.

Note: According to JustHost, once a transfer is started you cannot make any
changes to the whois information.  No contact changes.  No Nameserver changes.
You must wait until the transfer completes.

See https://www.namecheap.com/support/knowledgebase/article.aspx/255/83/what-should-i-do-to-transfer-a-domain-to-namecheap
for more detailed info.
