# Bunch_help_center
## :boom: What is it all about?
This project contains sample set of E2E test cases for Bunch's help center principal functionalities.

Getting Started
-----------

To get started, clone this repo, and run `npm install` in the root directory.

```sh
git clone https://github.com/Eleein/Bunch_help_center.git
cd Bunch_help_center
npm install
```
Then, you should run `Playwright` to make sure the tests are running.

Description
-----------
These tests are representative user interactions with the Bunch application. They are scoped to
common user's workflows that bring the most value to the business and to flows that are critical to the users’ experience.

There are two test suites **Search** and **Navigation**. 

**Search** suite tests two happy paths that are common user workflows:
1. Searching an article using the dropdown menu.
2. Searching an article using the full list of results.

**Navigation** suite tests a happy path and one unhappy path:

1. Navigating from the General section of collections to a specific article.
2. Mispelling a word in the address bar to find the "Page DOES NOT EXIST" page.



