#!/bin/bash
#source .env

# **********************************************************************************
# Functions definition
# **********************************************************************************

function configureKeycloak() {
    echo "************************************"
    echo " Configure Keycloak realm"
    echo "************************************"

    # Set the needed parameter
    USER=$KEYCLOAK_ADMIN_USER
    PASSWORD=$KEYCLOAK_ADMIN_PASSWORD
    KEYCLOAK_URL=$KEYCLOAK_HOST_URL
    GRANT_TYPE=password
    CLIENT_ID=admin-cli
    REALM_INFO=./keycloak/settings/realm-export.json
    REALM_NAME=$(grep -m 1 "\"realm\":" $REALM_INFO | cut -d'"' -f 4)
    echo "Realm Name in file : $REALM_NAME"
    if [ "$REALM_NAME" = "" ]; then
        echo "------------------------------------------------------------------------"
        echo "No realm name found in $REALM_INFO file."
        echo "The script exits here!"
        echo "------------------------------------------------------------------------"
        exit 1
    fi
    access_token=$( curl -d "client_id=$CLIENT_ID" -d "username=$USER" -d "password=$PASSWORD" -d "grant_type=$GRANT_TYPE" "$KEYCLOAK_URL/realms/master/protocol/openid-connect/token" | sed -n 's|.*"access_token":"\([^"]*\)".*|\1|p')

    # echo "Access token : $access_token"

    if [ "$access_token" = "" ]; then
        echo "------------------------------------------------------------------------"
        echo "Error:"
        echo "======"
        echo ""
        echo "It seems there is a problem to get the Keycloak access token: ($access_token)"
        echo "The script exits here!"
        echo ""
        echo "------------------------------------------------------------------------"
        exit 1
    fi

    # Check if realm already exists
    echo "------------------------------------------------------------------------"
    echo "Checking if the realm $REALM_NAME is already configured in Keycloak"
    echo "------------------------------------------------------------------------"
    echo ""
    realms=$(curl -H "Content-Type: application/json" -H "Authorization: bearer $access_token" "$KEYCLOAK_URL/admin/realms")
    # echo "existing Realms : $realms"
    realm_exists=$(echo $realms | grep $REALM_NAME)
    #echo "realmexists = $realm_exists"

    if [ "$realm_exists" != "" ]; then
        echo "------------------------------------------------------------------------"
        echo "The realm $REALM_NAME is already configured"
        echo "The script exits here!"
        echo "------------------------------------------------------------------------"
        exit 1
    else
        echo "------------------------------------------------------------------------"
        echo "The realm $REALM_NAME was not found"
        echo "continuing..."
        echo "------------------------------------------------------------------------"
    fi

    # Create the realm in Keycloak
    echo "------------------------------------------------------------------------"
    echo "Creating the realm $REALM_NAME in Keycloak"
    echo "------------------------------------------------------------------------"
    echo ""

    result=$(curl -d @"$REALM_INFO" -H "Content-Type: application/json" -H "Authorization: bearer $access_token" "$KEYCLOAK_URL/admin/realms")

    if [ "$result" = "" ]; then
        echo "------------------------------------------------------------------------"
        echo "The realm $REALM_NAME is created. "
        echo "Open following link in your browser:"
        echo "$KEYCLOAK_URL/admin/master/console/#/$REALM_NAME"
        echo "------------------------------------------------------------------------"
    else
        echo "------------------------------------------------------------------------"
        echo "Error:"
        echo "======"
        echo "It seems there is a problem with the realm creation: $result"
        echo "The script exits here!"
        echo ""
        exit 1
    fi
}

#**********************************************************************************
# Execution
# **********************************************************************************

configureKeycloak
exit 0
