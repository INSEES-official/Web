# INSEES Web-2023

## Documentation: (First Go Through the Documentation)
    https://docs.google.com/document/d/1SQpOTUNkzMsLib8otJS6Iel3gz2fWFjBZqB3bojE16w/edit?usp=sharing

## FIRST TASK FOR ALL: 
	
  ### Clone Repository: 
    git clone https://github.com/INSEES-official/Web.git
    
  #### Next step
    cd Web
    npm i  
    
  #### Those who are using LAN ( proxy ) (It is dynamic proxy, Don't use static proxy)
    cd Web
    npm --proxy http://172.16.199.20:8080 i 

## EVERYTIME YOU WORK ON A NEW ISSUE:

### Pull the main : 
      git pull origin main 
      (ALWAYS DO THIS STEP TO AVOID ANY MERGE CONFLICTS)
      
### Make a new branch: 
	  git checkout -b < yourinitials_branchname >
			(eg: git checkout -b home_section)
### Add and commit : 
    git add .
    git commit -m “home details update”
    
### Push : 
    git push -u origin home_section

### If above command doesn't work :
    git remote -v 
    git remote set-url origin https://<SSH_Key>@https://github.com/INSEES-official/Web.git
    git push –set-upstream origin home_section

### How to Run in local system : 
    node app.js   (or npm start or npm start dev)
    localhost:3000
