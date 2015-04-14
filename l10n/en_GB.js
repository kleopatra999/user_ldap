OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Failed to clear the mappings.",
    "Failed to delete the server configuration" : "Failed to delete the server configuration",
    "The configuration is valid and the connection could be established!" : "The configuration is valid and the connection could be established!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "The configuration is valid, but the Bind failed. Please check the server settings and credentials.",
    "The configuration is invalid. Please have a look at the logs for further details." : "The configuration is invalid. Please have a look at the logs for further details.",
    "No action specified" : "No action specified",
    "No configuration specified" : "No configuration specified",
    "No data specified" : "No data specified",
    " Could not set configuration %s" : " Could not set configuration %s",
    "Configuration incorrect" : "Configuration incorrect",
    "Configuration incomplete" : "Configuration incomplete",
    "Configuration OK" : "Configuration OK",
    "Select groups" : "Select groups",
    "Select object classes" : "Select object classes",
    "{nthServer}. Server" : "{nthServer}. Server",
    "Do you really want to delete the current Server Configuration?" : "Do you really want to delete the current Server Configuration?",
    "Confirm Deletion" : "Confirm Deletion",
    "Select attributes" : "Select attributes",
    "_%s group found_::_%s groups found_" : ["%s group found","%s groups found"],
    "_%s user found_::_%s users found_" : ["%s user found","%s users found"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings.",
    "Could not find the desired feature" : "Could not find the desired feature",
    "Invalid Host" : "Invalid Host",
    "Server" : "Server",
    "Users" : "Users",
    "Groups" : "Groups",
    "Test Configuration" : "Test Configuration",
    "Help" : "Help",
    "Groups meeting these criteria are available in %s:" : "Groups meeting these criteria are available in %s:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "The filter specifies which LDAP groups shall have access to the %s instance.",
    "Test Filter" : "Test Filter",
    "Other Attributes:" : "Other Attributes:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"",
    "1. Server" : "1. Server",
    "%s. Server:" : "%s. Server:",
    "Host" : "Host",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "You can omit the protocol, except you require SSL. Then start with ldaps://",
    "Port" : "Port",
    "User DN" : "User DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty.",
    "Password" : "Password",
    "For anonymous access, leave DN and Password empty." : "For anonymous access, leave DN and Password empty.",
    "One Base DN per line" : "One Base DN per line",
    "You can specify Base DN for users and groups in the Advanced tab" : "You can specify Base DN for users and groups in the Advanced tab",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge.",
    "Manually enter LDAP filters (recommended for large directories)" : "Manually enter LDAP filters (recommended for large directories)",
    "Limit %s access to users meeting these criteria:" : "Limit %s access to users meeting these criteria:",
    "The filter specifies which LDAP users shall have access to the %s instance." : "The filter specifies which LDAP users shall have access to the %s instance.",
    "Saving" : "Saving",
    "Back" : "Back",
    "Continue" : "Continue",
    "LDAP" : "LDAP",
    "Expert" : "Expert",
    "Advanced" : "Advanced",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it.",
    "Connection Settings" : "Connection Settings",
    "Configuration Active" : "Configuration Active",
    "When unchecked, this configuration will be skipped." : "When unchecked, this configuration will be skipped.",
    "Backup (Replica) Host" : "Backup (Replica) Host",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Give an optional backup host. It must be a replica of the main LDAP/AD server.",
    "Backup (Replica) Port" : "Backup (Replica) Port",
    "Disable Main Server" : "Disable Main Server",
    "Only connect to the replica server." : "Only connect to the replica server.",
    "Case insensitive LDAP server (Windows)" : "Case insensitive LDAP server (Windows)",
    "Turn off SSL certificate validation." : "Turn off SSL certificate validation.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server.",
    "Cache Time-To-Live" : "Cache Time-To-Live",
    "in seconds. A change empties the cache." : "in seconds. A change empties the cache.",
    "Directory Settings" : "Directory Settings",
    "User Display Name Field" : "User Display Name Field",
    "The LDAP attribute to use to generate the user's display name." : "The LDAP attribute to use to generate the user's display name.",
    "Base User Tree" : "Base User Tree",
    "One User Base DN per line" : "One User Base DN per line",
    "User Search Attributes" : "User Search Attributes",
    "Optional; one attribute per line" : "Optional; one attribute per line",
    "Group Display Name Field" : "Group Display Name Field",
    "The LDAP attribute to use to generate the groups's display name." : "The LDAP attribute to use to generate the group's display name.",
    "Base Group Tree" : "Base Group Tree",
    "One Group Base DN per line" : "One Group Base DN per line",
    "Group Search Attributes" : "Group Search Attributes",
    "Group-Member association" : "Group-Member association",
    "Nested Groups" : "Nested Groups",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)",
    "Paging chunksize" : "Paging chunksize",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)",
    "Special Attributes" : "Special Attributes",
    "Quota Field" : "Quota Field",
    "Quota Default" : "Quota Default",
    "in bytes" : "in bytes",
    "Email Field" : "Email Field",
    "User Home Folder Naming Rule" : "User Home Folder Naming Rule",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute.",
    "Internal Username" : "Internal Username",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behaviour as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behaviour. Changes will have effect only on newly mapped (added) LDAP users.",
    "Internal Username Attribute:" : "Internal Username Attribute:",
    "Override UUID detection" : "Override UUID detection",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "By default, the UUID attribute is automatically detected. The UUID attribute is used to unambiguously identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behaviour. Changes will have effect only on newly mapped (added) LDAP users and groups.",
    "UUID Attribute for Users:" : "UUID Attribute for Users:",
    "UUID Attribute for Groups:" : "UUID Attribute for Groups:",
    "Username-LDAP User Mapping" : "Username-LDAP User Mapping",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Usernames are used to store and assign (meta) data. In order to precisely identify and recognise users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage.",
    "Clear Username-LDAP User Mapping" : "Clear Username-LDAP User Mapping",
    "Clear Groupname-LDAP Group Mapping" : "Clear Groupname-LDAP Group Mapping"
},
"nplurals=2; plural=(n != 1);");
