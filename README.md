unicornpoo
==========

shared header and footer server for amptalk

What does it do?
----------------

Serve a shared header and footer to AMP family sites.

Offer local and family-wide search.

Load common css and js.

Deployment instructions for AMP
===============================

Example commands are in (`parens`)

Preparation
-----------

1. Install git
2. Create an identity (public/private key pair) for SSH (`ssh-keygen`)
3. Give WD your public key (usually found in @~/.ssh/id_rsa.pub`)
4. Check out unicornpoo from live server: `git@tradescantia.theworkdept.com:unicornpoo.git` (`git clone git@tradescantia.theworkdept.com:unicornpoo.git`)

Quick deployment instructions, if you are in a hurry
----------------------------------------------------

1. Pull in remote changes (`git pull origin master`)
2. Make changes
3. Commit changes (`git add <files that were changed>; git commit -m 'message describing change'`)
4. Push changes to live branch (`git push origin master`)

Preferred deployment instructions
---------------------------------

1. Fork Ben's repo on github, and add your fork as an origin in your working repo (`git remote add billy-gh https://github.com/billy/unicornpoo`)
2. or, if it's already created, ull in remote changes (`git pull origin master`)
3. Create branch with descriptive name (`git checkout -b add-mailinglist-footer`)
4. Make changes
5. Test (`node poo.js; curl localhost:3000/headerfooter`)
6. Commit changes
7. Push branch (`git push billy-gh add-mailinglist-footer`)
8. Request WD review (we will review/test code, merge your work into the master branch, and deploy new code)

Quick deployment instructions, if you are in a hurry and using Github's GUI
---------------------------------------------------------------------------

1. Sync repo (Repository -> Synchronize)
2. Make changes to a file in the text editor of your choice (pref. textedit or something that doesn't munge line endings)
3. Open the Github application
4. Review your changes in the "Changes" section
5. Summarize your edits in the "Commit summary" box
6. Press "Commit" button
7. Press "Sync" button to submit changes to server and restart poo.js

Quick undo instructions, if you are in a hurry and using Github's GUI
---------------------------------------------------------------------

1. Sync repo (Repository -> Synchronize)
2. In "History", find the commit you want to undo
3. Under "Commit Actions" gear button, select "Revert this commit"
4. In "Changes", press "Sync" button to send your revert to server and restart poo

