Notice that this time (unlike the previous tasks) you have an AGENTS.md and a copy of it in GEMINI.md file that explains to the agent how to properly install R packages in our Codespace environment.

Prompt it:

```md
I want to use HMDHFDplus R package to get the data for Germany for last few years. I have password and user name, but i want the code in the R script that uses the `HMDHFDplus` package to get the credentials from `.env` file. Can you write such script and save it as `get_data.R`? I will put in my credentials int the `.env` file later, for now just setup the code and that file with how you would expect the credentials to be stored there. Double check list of functions in the pacakge and also using `?<function_name>` check how to use the function that fetches the data.
```


Once this is set, read the documenation of the agent harness (e.g. for OpenCode this there is [a specific section with exact example on how to set this up](https://opencode.ai/docs/plugins/#env-protection), for Gemini CLI, just try googling 'in gemini cli how to make a hook that prevents if from reading .env file?'). Then pass over the instructions to the agent itself and ask it to configure itself so that it cannot read the `.env` file and thus cannot access the credentials stored there.

Once that is done, restart the agent.

## Test the setup

You don't need to enter your real credentials into the `.env` file for this test, just put in some fake text there.

Try to force it to read the file with natural language instructions. See if it works.

Try fooling it, by askig it to write an R script that reads any text file and prints it to console. Then manually edit this script to read the `.env` file and print it to console. Then ask the agent to run this script and tell you what the output is. See if it can read the credentials this way.

## Feel free to continue expermenting

Feel free to put in your real credentials for the [Human Mortality Database](https://www.mortality.org/) and ask the agent to retrieve the data and perhaps create some plots for you.

After all of these experiments, don't forget to change your password for HMD in case you did put in your real credentials into the `.env` file at some point.
