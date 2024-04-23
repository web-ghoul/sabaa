Questions For Next Meeting:

1- Discuss On Sprint Tasks

2- Any Comment on Development  (Sidebar to be related to width , Hover on Icon to show title , User Menu includes (Setting , Profile , Logout) )

3- What is About Search And Filters and sorts (Cancel Filter By Date)
  1- Owners
    1- Search By Name , Code
    2- Sort By Name , Code 

  2- Companies
    1- Search By Name , MOL Code , Trade License Number , IMMG Card Number
    2- Sort By Name , MOL Code 

  3- Jobs
    1- Search By Name ,  MOHRE Code
    2- Sort By Name , MOHRE CODE 

  4- Nationalities
    1- Search By Nationality , ID
    2- Sort By Nationality , ID
  
  5- Users
    1- Search By Name , Code
    2- Sort By Nationality , ID

4- What is Data Set in Table For (Owners, Companies , Employees  , Transactions)
  1- Owners
    1- Code
    2- English Name
    3- Nationality
    4- Phone
    5- Emirates ID
  
  2- Companies
    1- English Name
    2- MOL Code
    3- Phone
    4- Status
    5- IMMG Expire Date

  3- Users
    1- English Name (Show)
    2- Arabic Name
    3- Email (Show)
    4- Username 
    5- Phone (Show)
    6- Avatar 
    7- Status (Show)
    8- Password
    9- Role (Show)
    

5- What is Validation For Every Form (Add Owner , Add Companies , Add Transaction [Work Permit , Add LC , Renew LC]) & (I want see functionality of id searching for name)
  1- Owners (All Required Before Mobile Number)

  2- Companies (Not Required [Tenancy , tenancy contract EXP , Country , PRO Name , State , Address , Telephone , TRN , Remarks , Email , Zip Code , Whatsapp Number])

  3- Users (All Required)





New Idea
  1-  Implement Google Map API For Any Address


Questions :
  1- What is Company Categories



Notes

Missing in Company Form
1- Liceanse Issue place
2- Zipe Code
3- Tenancy Contract Value
4- Tenancy Contract Expire

controlled by admin:
1- Status of company
2- Estishmnet type of company
3- MOL Category Of Company
4- License Issue Place
5- State of Company  

Search Fro jobs 
missing search by job title

Change color of Table Head

Edit Table
https://admin.pixelstrap.net/dunzo/template/list-products.html#

Buttons in header (Add Company , Add PRO , Add Transaction , Add Owner)

Open Sidebar For Owner , Company , Employee , PROs , Transactions



Notes
1- Reverse of company name
3- Status in query


Notes :
  1- Limit ALL  (Done)
  2- Edit Date For day-month-year (Done)
  3- Make Remark Textarea (Done) 
  4- Reduce Spaces between textField (Done)
  6- Don't Delete From Database Even Deleted it (Working By Amr) (Done)
  7- Value of tab will be reset every view (Done)
  8- Email Validate Input (Done)
  9- Every Input will be do specific (Done)
  10- Edit and add will be popup (except Company) (Done)
  11- Fix Autocomplete (Done) (I am very Happy)
  12- Don't Close Sidebar By click on any item (Done)
  13- Handle Input Label (Done)
  14- Handle Form Shape with error message (Done)
  15- Add Person code at edit owner (Done)
  16- Error Message for wrong create sheet (Working By Amr) (Done)
  17- Download Sample for upload Sheet (Pending)
  18- Refuse Any sheet different when upload (Done)
  19- Filter By And Concept not Or (Mistake By Me and it will fix when finish filter all button) (Done)
  20- Filter button For all Filter to work (Done)
  21- when click on item of sidebar don't reset filters (Done)
  22- No Filters For Companies Of Owners or owners of Companies  (Done)
  23- Activities Tab For Owner, Company , PRO , Employee (Done)
  24- When Edit Go to the editable item (Company , Owner) (Done)
  25- Add Employees Tab For Company (Done)
  26- Add - For non Value For any field has no value (Done)
  27- Edit Profile Strtucture (Done)
  28- Change Code To Person Code (Done)
  29- Placeholder For search Like (Search by Name , Code) (Done)
  30- Pagination of table change to default table's pagination in MUI (Done)
  31- Filter By Date From to To (Working By Amr) [Owner => (dobFrom ,dobTo) , Company => [(IMMGFrom , IMMGTo) , (licenseFrom , licenseTo)]] (Done)
  32- Use Mongo Id for All Tables (Done) 
  33- Gap between Tabs And Components (Done)
  34- Interal Server Error For Edit Company When Choose New State (Working By Amr) (Done)



  Notes for Sprint 3 :
  1- Transaction:

    Forms
      Work Permit: (Employee name (10) , Gender , Nationaliy , Date of birth) (Sort)
        1- Serial Number  
        2- Person Code
        3- Transaction Number 
        4- Gender
        5- Company 
        6- Employee 
        7- Date of Birth 
        8- Nationality
        9- Passport Number
        10- Passport Expire Date
        11- Job
        12- UID Number
        13- Emirats ID Number

      New Labour Card:
        1- LC Number
        2- LC Expire Date
        3- Emirates ID Number

  2- Employees
    Form
      Make by owner

    Renew Labour Card

  4- Reports
    1- Employees List
      1- Downloads (Active , Cancel, Expire)

    2- Companies List
      1- Dowmload (Companies List , Company Details)

    3- Transactions List
     1- Download one file just

    4- Employees List will be ()

  5- Settings
    1- Permitions
      1- Show Forms
      2- Controls (Add , Edit , Delete)
      3- Upload (Upload Owners , Upload Companies, Upload Employees , Upload Jobs, Upload Nationalities)

    2- Options (All Forms)
      1- Manage States
      2- Manage Establishment Types
      3- MOL Category
      4- License Issue Place

notes
1- Search alone not with filter and filter button with filters (Done)
2- Keep in date 2 decila like 01/2 and remove time from all except creatd (Done)
3- transition for remark (Done)
4- From view Bug still of tabs (Done)
5- Get all nationalities (Done)
6- Remarks , Tenancy Contract Expire Date (Amr)
7- Mongo Id for company (Amr)
8- when click on item of sidebar don't reset filters (Done)
9- Arabic name incluse to business details (Done)
10- Username will be english and lower and upper (Done)
11- Username is unique (Amr)



New Notes:
1- username is accept numbers (Done)
2- id and nationality is unique (Amr)
3- Cancel in edit company in upload excel (Done)
4- website is not arabic accept (Done)
5- MOHRE is unique (Amr)
6- Don't refresh Sidebar buttons (Done)
7- Seperate in Company form like profile  (Done)
8- Phone is unique (Amr)
9- View Current User (Done)
10- Person Code and phone is not input with type number (Done)
11- Edit owner reset owner avatar (Done)
12- Add Uid Number to owner table (Done)
13- Person code and uid and emirate is unique in owner and Person Code is not required and uid is required (Done) (Amr)
14- TRN is number only (Done)