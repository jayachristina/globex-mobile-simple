# GlobexPartner

# Run in local 
npm run dev:ssr

# Parameters needed


## 3scale protected URL from 3scale develpper portal
export GLOBEX_PRODUCT_CATALOG_API=https://globex-catalog-product-3scale-user1-apicast-production.apps.cluster-sh2dk.sh2dk.sandbox29.opentlc.com/services/products

export USER_KEY=3ec5145683cb866d47a7f1b6d555334c



## needed to run docker image 

NODE_ENV -> always "prod" on openshift

PORT -> always "8080" on openshift


## docker

docker build -t quay.io/globex-recommendation/globex-mobile-simple:latest .

docker pull quay.io/globex-recommendation/globex-mobile-simple:latest 

docker pull quay.io/globex-recommendation/globex-mobile-simple:<checkin-tag>
