APP_DIR := tayloredgerton
PDF_NAME := Taylor_Edgerton_Resume.pdf
DIST_PDF := $(APP_DIR)/dist/assets/pdf/$(PDF_NAME)
LOCAL_PDF := $(APP_DIR)/generated/$(PDF_NAME)
PUBLIC_PDF := $(APP_DIR)/public/assets/pdf/$(PDF_NAME)

.DEFAULT_GOAL := help

.PHONY: help install dev-run build resume linkedin preview all clean

help: ## Show the available commands
	@awk 'BEGIN {FS = ":.*## "; printf "Usage: make <target>\n\nTargets:\n"} /^[a-zA-Z_-]+:.*## / {printf "  %-12s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install locked npm dependencies
	npm --prefix $(APP_DIR) ci

dev-run: ## Start the Astro development server
	npm --prefix $(APP_DIR) run dev

build: ## Build the site and generate the deployed PDF resume
	npm --prefix $(APP_DIR) run build

resume: build ## Build and stage the PDF resume for local development and distribution
	mkdir -p $(APP_DIR)/generated $(APP_DIR)/public/assets/pdf
	cp $(DIST_PDF) $(LOCAL_PDF)
	cp $(DIST_PDF) $(PUBLIC_PDF)
	@echo "Resume available at $(LOCAL_PDF) and $(PUBLIC_PDF)"

linkedin: ## Generate paste-ready LinkedIn profile content
	npm --prefix $(APP_DIR) run linkedin

preview: ## Preview the production build locally
	npm --prefix $(APP_DIR) run preview

all: install build ## Install dependencies and build every deployable artifact

clean: ## Remove generated Astro and resume output
	rm -rf $(APP_DIR)/dist $(APP_DIR)/.astro $(APP_DIR)/generated
