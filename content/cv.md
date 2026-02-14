# 陶元凯 (YUANKAI TAO)
[Email](mailto:yut033@ucsd.edu) | [Homepage](https://yuankaitao-super.github.io/) | [GitHub](https://github.com/YuankaiTao-super) | [LinkedIn](https://www.linkedin.com/in/yuankai-tao-211788328/)

---

## EDUCATION BACKGROUND

### University of California, San Diego (UCSD)
* **M.S. in Quantitative Finance**
* **Expected Grad:** Dec 2025
* **GPA:** 3.84/4.0
* **Key Courses:** CSE 251 Deep Learning, MGTF 423 Data Science for Finance, MGTF 413 Computational Finance, MGTF 404 Financial Econometric and Empirical Methods
* **Honors:** Beta Gamma Sigma (BGS) (Top 20% of graduating class)

### Zhongnan University of Economics and Law (ZUEL)
* **B.S. in Management**
* **Graduated:** June 2024
* **GPA:** 3.53/4.0
* **Key Courses:** Statistics (90/100), Linear Algebra (93/100), Quantitative Investment (Experiment) (94/100)
* **Honors:** Special Scholarship in Innovation and Entrepreneurship, Second-class Scholarship

---

## SKILLS

* **Programming:** Python, SQL, C++, CUDA, Linux, STATA, LATEX 
* **Tools and Libraries:** PyTorch, scikit-learn, PySpark, Pandas, Polars, NumPy, etc. 
* **Languages:** Mandarin (Native), English (Proficient, IELTS 7.5, GRE 327) 

---

## RESEARCH EXPERIENCE

### Research Assistant for Professor Franklin Qian, UNC-Chapel Hill (Mar 2025 - Present) 
**The Numbers Game: Effects of Listing and Counteroffer Pricing Format in Housing Bargaining** 
* Engineered a large-scale data pipeline (Python, PostgreSQL, PostGIS) to process a 76-million-observation spatial dataset (40+ variables) on Google Cloud Platform (GCP), using tools including BigQuery and Google Compute Engine (GCE). 
* Computed spatially comparable housing variables across various ranges (e.g., 0.2, 0.5, 1.0 mile) based on specific time-window and other property-related filtering criteria, leveraging parallelized workflows to accelerate computation (by 50x, approximately). 
* Built and managed a SQL database (100GB+, 987.5M observations) with Python and DuckDB on UNC’s Longleaf high-performance computing cluster; executed queries to calculate population of low-skilled renters.
* Reproduced the construction process for variable seller experience and incorporated condition-based duplicate checks, finding a negligible 1.03% duplication rate. 

### 2022 Chinese National Innovation and Entrepreneurship Training Program (Jan 2022 - May 2024) 
**Multi-objective Optimization of Cost & Emission in Thermal Power Plants** 
* Partnered with major energy SOEs (China Huaneng Group, State Grid) to conduct on-site field research; collected and processed operational data through 254 questionnaires and in-depth interviews across 3 thermal power plants.
* Incorporated CERs (Certified Emission Reductions) into standard LCOE to account for carbon emission trading values into costs; Quantified the lifecycle impact of low-carbon upgrade for the existing units.
* Optimized the carbon-adjusted LCOE for existing units under operational constraints (e.g., ramp rates) for 3 periods, proving that the optimization can lower the cost by 0.102 RMB/kWh(22%), undercutting the regional thermal power benchmark (0.416 RMB/kWh).

### Independent Research (Jan 2025 - Present) 
**The Impact of News Media Sentiment on Financial Markets** 
* Fine-tuned an industry classifier (93.5% accuracy) using a pre-trained BERT model with multi-frequency data of news sentiment. 
* Found that negative news sentiment strongly and negatively affects stock returns and that high-tech industries react more quickly to news than traditional manufacturing. 

---

## TECHNICAL PROJECTS

### Performance Optimization of a Yield-to-Worst Solver 
**Team Lead | Supervised by Dr. Chad Wildman, Executive Director of Quantitative Strategies at FMSBonds** 
* Assisted in completing the core functions related to risk detection for the computation module. 
* Designed a caching system to memorize high-frequency cash flow queries, solving the I/O bottleneck from redundant computations and yielding a 9x performance increase. 
* Rewrote the core yield-to-worst numerical solver using Numba JIT, reducing the computation time for a single bond from 1.57 ms to 7.5 μs, achieving a 210x speedup. 

### Jane Street Market Prediction Competition (Kaggle) 
**Silver Medal | Top 2.7%, Ranked 94th/3757** 
* Conducted EDA (e.g., correlation analysis, visualization) on dataset to better understand hidden patterns. 
* Implemented features expansion on anonymized market data to obtain more information for training. 
* Trained multiple tree models and deep learning models, ensembled models for the best performance (NN, Ridge Regression, XGBoost and TabNet). 

### UCSD CSE 251B Class Competition 2025 
**Trajectory Prediction Challenge | Using Argoverse 2 Motion Forecasting Dataset** 
* Performed data preprocessing, especially data augmentation on raw data, including 50% probability coordinate rotation, flipping, and Gaussian noise addition. 
* Architected a OneStepLSTM model with rolling features adopted for autoregressive prediction, leading to a significant performance improvement (e.g., test metric improved from 10.22 to 8.50). 

### C++ Option Pricing Engine 
**Advised by Prof. Ruth Williams | MGTF 413 Self-initiated Project, UCSD** 
* Assisted in completing the core functions related to risk detection for the computation module. 
* Designed a caching system to memorize high-frequency cash flow queries, solving the I/O bottleneck from redundant computations and yielding a 9x performance increase. 
* Rewrote the core yield-to-worst numerical solver using Numba JIT, reducing the computation time for a single bond from 1.57 ms to 7.5 μs, achieving a 210x speedup. 

### Text Analysis and Bert Fine-tuning on 10k reports 
**MGTF 423 Final Project, UCSD** 
* Extracted unstructured text strings from raw reports, cleaned the text and stored the information in a standardized way. 
* Conducted an in-depth exploratory analysis of the cleaned text data extracted from 10k reports for Fluence Energy, Inc, from Y2022-Y2024. 
* Fine-tuned BERT model based on a cleaned dataset, including 20.5 million rows of text strings extracted from 10k reports (SEC). 

---

## PROFESSIONAL EXPERIENCE

### VariFlight Technology - Data Developer, Intern (Jun 2025 - Aug 2025) 
* Built a Python-based data pipeline to collect and preprocess large-scale unstructured public aviation data (PDF reports and webpages) from the Civil Aviation Administration of China (CAAC). 
* Designed a schema-aware preprocessing system that automatically detected table layouts and processed documents with specific workflows for each branch, enabling further downstream analysis; extracted data from 600+ non-standardized PDF reports and 500+ webpages using OCR (pytesseract) and rule-based processing (Camelot), transforming raw data into consistent CSV datasets for statistical analysis and local LLM training.
* Built an interactive dashboard based on the standardized datasets generated from the extracted data, visualizing key transportation metrics such as passenger turnover and freight turnover. 

### Haitong Securities (Top 4 securities firm in China) - Investment Analyst, Intern (Jan 2024 - May 2024) 
* Conducted quantitative analysis on large-scale sales and transaction data to identify anomalies and support due diligence for IPO projects.
* Performed data validation and consistency checks across financial and operational datasets using Wind terminal.

### Ernst & Young - Assurance, Intern (Dec 2022 - Feb 2023) 
* Assisted the client, Hyundai Motor Finance Company (China), in auditing financial data related to inter-company and investment transactions. 
* Conducted variance analysis: investigated significant deviations, and reviewed supporting documents. Drafted reports on anomalies with recommendations. 
* Utilized an automated pipeline to clean financial tables from 220+ csv files and generated standardized audit reports. 

---

## CERTIFICATIONS 

* **Deep Learning Specialization (5-Course Certificate)** - Coursera, Deep Learning. AI 
* **Algorithms and Data Structures Certificate (6-Course Certificate)** - Coursera, UC San Diego 
* **I/O-efficient algorithms (1-Course Certificate)** - Coursera, EIT Digital
* **Big Data Fundamentals with PySpark** - DataCamp 

---

## HOBBIES 
* Love poker, board games (big fan of A Game of Thrones (board game)), Japenese Animation and tennis. 

