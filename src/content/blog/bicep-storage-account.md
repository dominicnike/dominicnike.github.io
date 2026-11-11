---
title: 'Deploying an Azure Storage Account with Bicep'
description: 'A beginner-friendly walkthrough of writing a Bicep template for an Azure Storage Account and deploying it with the Azure CLI.'
pubDate: 2026-11-05
tags: ['Azure', 'Bicep', 'Infrastructure as Code']
---

Bicep is a domain-specific language for deploying Azure resources declaratively. In this post we'll create a storage account.

## The template

```bicep
param location string = resourceGroup().location
param storageName string = 'st${uniqueString(resourceGroup().id)}'

resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageName
  location: location
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
  properties: {
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
  }
}

output storageId string = storage.id
```

## Deploying it

```bash
az group create -n rg-bicep-demo -l westeurope
az deployment group create -g rg-bicep-demo -f main.bicep
```

### Verify

```bash
az storage account list -g rg-bicep-demo -o table
```

## Wrapping up

Bicep keeps templates concise and readable. Next, we'll look at enforcing standards with **Azure Policy**.
