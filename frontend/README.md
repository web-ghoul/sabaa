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





Notes (() form Required , <> For View on Table , [] For Options of Select , {} for Unique) : 

1- Transaction (Four SubLink [All , Pre Approval Work Permit , New Electronic Work Permit , Renew Electronic Work Permit])

  1- Forms : 

    1- Work Permit :
      1- Serial Number (*) <>
      2- Person Code () <> for search
      3- Transaction Number  (*) <.>
      4- Gender (*) <>
      5- Company  (*) <.>
      6- Employee Name (*) <.>
      7- Date of Birth  (*) <>
      8- Nationality (*) <>
      9- Passport Number (*) <>
      10- Passport Expire Date (*) <>
      11- Job (*) <>
      12- UID Number () <>
      13- Emirates ID Number () <>
      14- Status [inProcess , Approved , Rejected , Nawakes] {Set Automatice When Add New Work Permit Waiting Labour Card} () <.>
      15- Status Date  () <>
      16- Remarks
      17- Card Type (Types of Each Form From Trasaction Plan File)
      18- Salary () <>

      Approved Work Permit :
        1- Person Code (*) 
        2- Work Permit (*)
        3- Work Permit Expire Date (*) <.>
        4- Visit Visa Expire Date ()

    2- New Labour Card (With Work Permit Fields) :
      1- New LC Number (*)
      2- LC Expire Date (*) <>
      3- Tawjeeh Date ()
      4- Change Status Date () <.>
      5- Medical Date ()
      6- Residence Expire Date () <.>
      7- Medical Insurance of Employee ()
      8- ILOE () 

    3- Renew Labour Card :
      1- New LC Number (*)
      2- LC Expire Date (*) <>
      3- Tawjeeh Date ()
      4- Medical Date ()
      5- Residence Expire Date () <.>
      7- Medical Insurance of Employee ()
      8- ILOE ()

  2- Search 
    1- (Work Permit) Search By ( Transaction Number , Employee Name , Company Name )
    2- (New LC) Search By ( Transaction Number , Employee Name , Company Name )
    3- (ReNew LC) Search By ( Transaction Number , Employee Name , Company Name )

  3- Sort 
    1- (Work Permit) Sort By ( Work Permit Expire Date , Change Status Date)
    2- (New LC) Sort By ( LC Expire Date , Residence Expire Date , Change Status Date)
    3- (ReNew LC) Sort By ( LC Expire Date , Residence Expire Date , Change Status Date)

  4- Filter
    1- (Work Permit) Filter By ( Transaction Status , Work Permit Expire Date )
    2- (New LC) Filter By ( Transaction Status , Expire Date , Residence Date )
    3- (ReNew LC) Filter By ( Transaction Status , Expire Date , Residence Date )

2- PRO (Same Of Owner)

3- Employee

  1- Form :

    1- Company (*) <>
    2- Name (*) <.>
    3- NameAr (*) <>
    4- Gender (*) <>
    5- Nationality (*) <.>
    6- Person Code () <.>
    7- Status [Active , Cancel] (*) <>
    8- Passport Number () <>
    9- Passport Expire () <>
    10- Card Type  () <.>
    11- Job () <>
    12- UID Number () <>
    13- Emirates Number () <>
    14- Visa File Number () <>
    15- Residence Expire Date () <.>
    16- Work Permit Number () <.>
    17- LC Expire Date () <.>
    18- Mobile Number () <>
    19- Email () <>
    20- Salary () <>

  2- Search By (Employee Name , Company Name , UID , Work Permit Number)

  3- Sort By (LC Expire Date , Residence Expire Date)

  4- Filter By (nationality , Card Type , Status , Gender)


4- E-Channel

  1- Forms :

    1- Company
      1- Serial Number () <>
      2- User Type [] () <>
      3- Status [] () <>
      4- IMMG Card Number () <>
      5- Username (*) <>
      6- Password (*) <>
      7- Company Name () <>
      8- Company NameAr () <>
      9- License Expire Date () <>
      10- IMMG Expire Date () <>
      11- E-Channel Expire Date () <>

    2- Person
      1- Serial Number () <>
      2- User Type [] () <>
      3- Status [] () <>
      4- IMMG Card Number () <>
      5- Username (*) <>
      6- Password (*) <>
      7- Company Name () <>
      8- Company NameAr () <>
      9- License Expire Date () <>
      10- IMMG Expire Date () <>
      11- E-Channel Expire Date () <>

  2- Search By ( , )

  3- Sort By ( , )

  4- Filter By ( , )



5- Tasheel 
  1- Form : 



6- Natwasal




Side Notes :
  1- MOL Code is not require in Company Form (Amr)
  2- Field Typing is Slow (useMemo on Form) (Testing)
  3- License Issue Place be side License Issue Date in Company Form (Done)
  4- website Box is Navigate not window Location Href (Done Already) ??
  5- Profile Info Instead of Person Info In Company Profile (Done)
  6- Handle Placeholder of Search of users (Search Username... insead of Search Name, Person Code...) (Done)
  7- Handle Icon Of Add User in Button (Done)
  8- View icon For Password Field To View Password  (Done)
  9- Link Company With Owner or PRO (Popup include AutoComplete For Company)
  10- Add New Field For Control on Notification 
  11- Add E-Channel Expire Date to Company Form
  12- Add Walk in Customers Like Owner
  13- Download Sample for Upload Sheet
  14- GDRFA and Echannel Form In Company Form and Add Actions 






Notes :
1- Send Password of e-channel of company (Encrypted)
2- Create Excel Sheet (Excel and Excel All)
3- Handle Customer like Owner (isCustomer)
4- Added to Customer (Sponsor)
5- Added to Owner and Pro (Residence Expire Date , File Immg Number , Status , Card Number)
6- Build Upload Employee For Specific Company API
7- Added Creator For Activities and Send Id of Actor 
8- Handle Spell of Owner to Employee in Employee API
9- Set Default Value for status of Employee
10- Finish Forgot And Reset Password







































Notes :
1- add Checkbox for pro and owner forms (Waiting)
2- Make File Immg Number (Numbers and / only)
3- Sponsor Form (- Person Code) [Husband , Maid , Wife , Son , Daughter , Mother , Father]
4- Insurance Company is Text 
5- Policy is Text
6- File Immg Number at enployee Form
7- Link to More than One Company For owner and pro (Customer) and Hide company already linked
8- Add Sponsor for all employees , owners, customer, pros
9- Remove Customers for Company Form
10- See Password in Company 
11- Add Whatsapp Icon to whatsapp Number and when click on it go to WhatsApp
12- Switch Immg Card Number and Immg Expire Date in Company Table 
13- HandleDateForPost (Handle Different of Date)
14- Fit Button of Sample (Fit Link) 
15- Add Officer to owner tabs 
16- Owner and officer date of birth not less than 18
17- GRFA (Username, Password , Noqodi Wallet (Lower and Upper) , Noqodi Passport , Pin Token (Numric) , Noqodi New , Noqodi registeration , Noqodi NPass (Text))
18- Convert Customer into (Owner , Pro)




E-Channel For Person (Owner , Customers , Employees , Pros):

1- Searching for UID
2- Filter by User Type , Status[active , inactive] , Gender
3- Same Search of Owner
4- Name , Username , password , user type , uid , emirates id
5- Sort By Name
6- Default Sort By Status 
7- Add E-Channel To Owner



Tasheel : 
1- Username , password , Security ques 1 , Security ques 2 , Email user , mobile user , notes
2- When Searching Display Results and Select it when searchin for company seach for establishment type is mol
3- Search by owner code, employee code, company code
4- Name , Person Code
5- Name , Arabic Name , username , password , security 1, security 2
6- Filter by type
7- sort by Name 


Natwasal is Same of Tasheel



Notes For Amr :
1- Return Name of Person at echannel schema
2- Return PersonId at Echannel Schema
3- If Link Company To Owner or Pro more than once that is owner appear more than once in company profile in owners tab
4- Add Job and Gender in Customer and Sponsor Schema
5- Return E-Channel Details of Person with profile Data



Notes for Amr :
1- First Edits in Tasheel       

32545623423 0561545121



Meeting Track:
1- Handle all Sample Files
2- Talk about Convert input to text label
3- 



business deve
plans
marketing
consultant
مستحضرات تجميل


header
hero
about us
services
vision
products
partners
footer

blogs (Open Modal)

https://www.bigmove.agency/




Reports :
1- Employee List
  1- Search By (Company Name and Mol Code [Auto Complete]) , 
  in View of Employee Show Modal Include info of 
  2- PDF For Work Permit Expire , Cancel , Active

2- Owner Company
  1- Search By Owner Name , Person Code , Emirates Id , UI Number
  2- PDF for Company Details , Companies list

3- Company Transaction
  1- Search By Company Name , Mol Code
  2- PDF for All Data

4- Employee details
  1 - Search By Employee Name  , Emirates Id, Person Code , UId Number
  2- PDF for Employee For Details  , PDF for all transaction for employee


settings : 

1- Customize 
  1- Company name 
  2- Logo
  3- Mobile
  4- Website Link
  5- Official Email

2- Alert 
  1- Passport Exp
  2- WP Exp
  3- Visit Visa Exp
  4- CS Date
  5- Twajeeh 
  6- LC Exp
  7- Residence Exp

3- Permissions

4- Select 
  1- Mol Category
  2- Establishment Type
  3- State
  4- License Issue Place
  5- Status of Employee
  6- Card Types
 

  

notes:
  1- Rename brumcrub with same sublink in transactions
  2- remove serial number in work permit form
  3- Show Card Types only for its types
  4- make person code is not requires in work permit transactions
  5- make passport number and passport expire date fetch when search on employee with person code in work permit form
  6- show transactions in sublinks according to card Types
  7-  card number is same of work permit number and labour card number (Unique the name for Labour card number)
  8- Check filled data when edit
  9- in each of transaction type add button showing specific form such as new lc 
  when  clicked on add transaction open new lc form and searching on transaction with labour card number
  10- Make Validation on Card Type of transaction
  11- Set Card Type Field In Top of From
  12- Add 2 New Fields When Card Type is National
  13-  4- Select 
        1- Mol Category
        2- Establishment Type
        3- State
        4- License Issue Place
        5- Status of Employee
        6- Card Types





Notes For Amr : 
1- حقل Person Code + Emirates ID فى  فورم Edit Owner عند عمل حذف لبيانات الحقل وعمل حفظ  وعند عمل view  لم يتم حذف بيانات هذا الحقل

2- 



1- remove add button in all
2- remove national card type in pre form
3- Make status in last of table
4 -default status "in process"
5- when change status no card tytpe change set old card type








Tasks For Finish :
1- Handle Activities Table (Pagination)
2- Finish Alert (Done)
3- Solve Card Type Selector Problem
4- Finish Report
5- Finish Transaction
6- Finish Emirates IDs
7- Finish Permission
8- Finish Responsive
9- Finish Customization Data
10- Complete Edits
11- Solve Upload Excel
12- Handle Roles in User Form (Done)



questions for meeting :
1- Updates in Transaction
    notes :
      1- Return Logs in transactions and record every edits on transaction
      2- Add Status Date in edit work permit form
      3- Add Created At Field in every Transaction Forms
      4- All Employee Data in Approved Form is Disabled
      5- Set Same of Transaction Number in Approved Form
      6- Add Validations on Status Date and Labour Card Expire Date 
      7- Remove Approved Status Action When Status is Approved
      8- Add Labour Card Status (Active , Cancel)
      9- Add New LC Action in Pre Work permit Table
      10- Add Renew LC Action In New LC Table
      10- Transaction Status Will be In Process in case Labour card is empty else it will be Approved
      11- Cancel Transaction Status of Any Old Transaction
      12- Any Employee Info is not set to employee table of Transaction has Status "Not Approved" 
      13- Set Labour Card Expire Date to employee Info of transaction
      14- Add Edit Action to New LC and Renew LC Tables
      15- Add Person Number to Approved Form
      16- Validation Of Date of birth in pre will be > 18
      17- Passport Expire Date will be > 6  months
      18- Filter By Users
      19- Default Sort Of Transaction table nawakas , in process, approved, rejected  
      20- Add Transaction Number to Employee Form
      21- Show All Employee info in New LC Form when Choose National Card Type
2- Emirates IDs and Residence (Done)
  Notes:
  1- Add Status of Delivery
  2- Add Received By (Default Office , Person) according to delivery by office checkbox
3- Questions for all excels samples sheets
4- Questions Company Info

E-Channel = > E-Channel Person
Passport Expire About to be Expired Alerts






customers: 3
owners :
12 , 15 
employee:
جديد , 4 , 6 , 8 , 13

companies:
4 , 6 , 7 , 12 , 14 , 17

PROs:
3 , 5 , 7 , 17 ,

jobs:
2

nationality:
1

E-Channel
1 , 4 , 5 , 

Tasheel
2 , 12 , 

Natwasal
1 , 6 , 

what is other section

dashboard
1,2,3,4

users:
1 , 2 ,3, 4 , 5

settings:
1,2,3,4,5,7,8,9,10






New Edits : 
1- Company Info Name (Done)
2- Transaction Number will be unique (Backend)
3- Approved is Updated Process
4- Employee is Created After Approved Transaction  (Backend)
5- When Add New Transaction If Employee is Already Exist (Check With Four Things [Name , Gender , Nationality , DOB]) Continue And Updated on Existence Employee and if Employee is Exist Continue his Info at transaction  (Backend)
6- Solve Problem Of Empty String For UID , Emirates ID and Person Code at Owners, Customers ,  Pros and Transaction  (Backend)
7- When Create Employee With Transaction and when try open it , i got "Invalid value for _id: GULF PREFAB HOUSING!"  (Backend)
8- Make Default Value of Status Date is Current Date
9- Make Disable Input at transaction => label
10- Lc Expire Date , Status and Person Code aren't come from Transaction at Employee  (Backend)
11- Status of Employee will named LC Status 
12- Link Employee With Company After Approved  (Backend)
13- Show All Card Types at Employee Form
14- Set Transaction Number After LC Expire Date
15- Policy Number and Expire Date at Medical Insurance and OLFE when empty them at updated are not Changed To be Empty  (Backend)
16- Set Company Name , Name , Person Code , LC Number , LC Expire Date and LC Status  and  will be labeled at top of new LC Form
17- set Default Value of LC Status is Active
18- UID is Required at LC Form
19- If Search on Transaction at LC From with LC Number , iF Found Employee with Transaction Number and Transaction Status is "In Process" , it will updated on it 
20- At LC Form , Make Default Value of Transaction Date will be Current Date
21- Transaction Status will be approved or cancel according to Card Type
22- At Logs of Transaction appear "ChangeStatusExpire About to be Changed at Alerts"  (Backend)
23- Remove Change Status Date From Renew LC Form
24- At Renew LC Form when search if Not Found Info Make Input able (not Disabled) Except Salary , it always able
25- Every New Transaction , it Will be Canceled (LC Status) Previous Transaction   (Backend)
26- LC Number is Unique (Backend)
27- When Choose Card Type "National GCC" , it will be treat Like New Transaction and has edit on it and new LC Number
28- When Update Owner or PRO , other is deleted
