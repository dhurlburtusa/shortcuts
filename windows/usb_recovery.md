# USB Recovery

One day I tried to access my USB thumb drive. I got the following message

> The volume does not contain a recognized file system. Please make sure that
> all required file system drivers are loaded and that the volume is not
> corrupted.

I used the following steps to get Windows to recognize the issue.

## Steps

After doing several Google searches, I finally found TestDisk.  It comes as a
zip archive.  Once extracted, it runs without an installation process.  Other
products require an installation process which may not be allowed on some
computers like at the library.

* Download [TestDisk].
* Extract its contents.
* Run the testdisk_win.exe executable.
* I did the following steps in the TestDisk program:
  - Select `No Log`
    + You can probably select `Create` too.
  - Select the media with the issue and then select `Proceed`
  - Select the partition table type.
    + I selected `None`.  This is the option that TestDisk automatically
      chose for me.
  - On the next screen, it was showing the partition as `P FAT32`.  If that is not
    the correct partition type, then select `Type`.  This will take you to a
    screen with several partition types to choose.  Select the correct one and the
    select `Proceed`.
  - Select `Boot` to perform a boot sector recovery.
  - If the screen displays the following, then proceed.  If it doesn't, then the
    steps needed may vary.
    
    > Boot sector<br>
    > Bad
    >
    > Backup boot sector<br>
    > OK

    Because the backup boot sector was OK, I selected `Backup BS` which copies the
    backup boot sector over the boot sector.
  - Select `Y` to confirm.
    
[TestDisK]: http://www.cgsecurity.org/wiki/TestDisk_Download
