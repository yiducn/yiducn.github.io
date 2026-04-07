/**
 * Modern Research Homepage - Data and Functions
 * 科研主页现代化设计 - 数据和功能
 */

// ============================================
// 论文数据 - Papers Data
// ============================================
const papersData = {
    journal: [{
        id: 'JOLD-001',
        title: 'MicrobeDiscover: A Knowledge Graph–Enabled AI Framework for Identifying Microbes for Inorganic Nanomaterial Biosynthesis',
        authors: 'Ludi Wang, Hexing Han, Yufeng Liu, Zhiyuan Ning, Yujie Ma, Haidan Wang, Jinling Xu, Qiansheng Huang, Wenjuan Cui, Yuanchun Zhou, Yang Gao, Bin Wang*, Yi Du*',
        journal: 'Advanced Science',
        year: 2026, sort_year: 2026, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:15.6,JCR Q1,中科院一区Top)',
        url: 'http://doi.org/10.1002/advs.202520587'
    },
    {
        id: 'JOLD-002',
        title: 'Accelerating materials discovery through active learning: Methods, challenges and opportunities',
        authors: 'Yujie Ma, Yang Gao, Ludi Wang, Ming Chen, Wenjuan Cui, Bin Wang*, Yi Du*',
        journal: 'The Innovation Informatics',
        year: 2025, sort_year: 2025, direction: 'ai-for-science', type: 'journal', meta: '',
        url: 'https://doi.org/10.59717/j.xinn-inform.2025.100013'
    },
    {
        id: 'JOLD-003',
        title: 'Preference-Aware Bayesian Optimization for Interactive Decision Making',
        authors: 'Yujie Ma, Ludi Wang, Wenjuan Cui, Yuanchun Zhou, Yi Du*',
        journal: 'IEEE Transactions on Cybernetics',
        year: 2025, sort_year: 2025, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:10.5,JCR Q1,中科院一区Top)',
        url: 'https://doi.org/10.1109/TCYB.2025.3633283'
    },
    {
        id: 'JOLD-004',
        title: 'Integrating machine learning insights in membrane electrode assembly for CO2 electrolysis',
        authors: 'Jiamin Huang, Haidan Wang, Ludi Wang, Yanhong Chang*, Yang Gao*, Yi Du*, Bin Wang*',
        journal: 'Advanced Functional Materials',
        year: 2025, sort_year: 2025, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:19.4,JCR Q1,中科院一区Top)',
        url: 'http://doi.org/10.1002/adfm.202518997'
    },
    {
        id: 'JOLD-005',
        title: 'CataLM: empowering catalyst design through large language models',
        authors: 'Ludi Wang, Xueqing Chen, Yi Du, Yuanchun Zhou, Yang Gao*, Wenjuan Cui*',
        journal: 'International Journal of Machine Learning and Cybernetics',
        year: 2025, sort_year: 2025, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:2.7, JCR Q3,中科院四区)',
        url: 'https://link.springer.com/article/10.1007/s13042-024-02473-0'
    },
    {
        id: 'JOLD-006',
        title: 'Assessing bioartificial organ function: the 3P model framework and its validation',
        authors: 'Jingmin An, Shuyu Zhang, Juan Wu, Haolin Chen, Guoshi Xu, Yifan Hou, Ruoyu Liu, Na Li, Wenjuan Cui, Xin Li*, Yi Du*, Qi Gu*',
        journal: 'Lab on a Chip',
        year: 2024, sort_year: 2024, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:5.8, JCR Q1,中科院二区)',
        url: 'https://pubs.rsc.org/en/content/articlelanding/2024/lc/d3lc01020a'
    },
    {
        id: 'JOLD-007',
        title: 'Interdisciplinary Fairness in Imbalanced Research Proposal Topic Inference: A Hierarchical Transformer-based Method with Selective Interpolation',
        authors: 'Meng Xiao, Min Wu, Ziyue Qiao*, Yanjie Fu, Zhiyuan Ning, Yi Du*, Yuanchun Zhou',
        journal: 'ACM Transactions on Knowledge Discovery from Data',
        year: 2024, sort_year: 2024, direction: 'knowledge-graph', type: 'journal', meta: '( CCF Rank B, SCI IF:4.0, JCR Q1,中科院三区)',
        url: 'https://dl.acm.org/doi/10.1145/3671149'
    },
    {
        id: 'JOLD-008',
        title: 'Automated Taxonomy Alignment via Large Language Models: Bridging the Gap between Knowledge Domains',
        authors: 'Wentao Cui, Meng Xiao, Ludi Wang, Xuezhi Wang, Yi Du*, Yuanchun Zhou',
        journal: 'Scientometrics',
        year: 2024, sort_year: 2024, direction: 'knowledge-graph', type: 'journal', meta: '(Accepted, SCI IF:3.5,JCR Q1, also indexed by SSCI)',
        url: 'https://rdcu.be/dO7ik'
    },
    {
        id: 'JOLD-009',
        title: 'Large language model enhanced corpus of CO2 reduction electrocatalysts and synthesis procedures',
        authors: 'Xueqing Chen, Yang Gao, Ludi Wang, Wenjuan Cui, Jiamin Huang,Yi Du*, Bin Wang*',
        journal: 'Scientific Data',
        year: 2024, sort_year: 2024, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:8.5,JCR Q1,中科院二区)',
        url: 'https://www.nature.com/articles/s41597-024-03180-9'
    },
    {
        id: 'JOLD-010',
        title: 'Manufacturing multi-organs database: A comprehensive, predictive, and analytical biofabrication database',
        authors: 'Jingmin An, Wenjuan Cui, Haolin Chen, Juan Wu, Yishuang Liang, Na Li, Yi Du*, Shuyu Zhang*, Qi Gu*',
        journal: 'International Journal of AI for Materials and Design',
        year: 2024, sort_year: 2024, direction: 'ai-for-science', type: 'journal', meta: '', 
        url: 'https://api-journal.accscience.com/uploads/file/20260227/a14b9debe2b0fd34872cb7d92b953f95.pdf'
    },
    {
        id: 'JOLD-011',
        title: '基于语义相似关系的学科交叉主题识别方法',
        authors: '王卫军,宁致远,董昊,乔子越,杜一*,周园春,',
        journal: '情报学报',
        year: 2024, sort_year: 2024, direction: 'knowledge-graph', type: 'journal', meta: '(录用,FMS T1)', url: ''
    },
    {
        id: 'JOLD-012',
        title: 'Revisiting electrocatalyst design by a knowledge graph of Cu-based catalysts for CO2 reduction',
        authors: 'Yang Gao, Ludi Wang, Xueqing Chen, Yi Du*, Bin Wang*,',
        journal: 'ACS Catalysis',
        year: 2023, sort_year: 2023, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:13.7,JCR Q1,中科院一区Top)',
        url: 'https://pubs.acs.org/doi/10.1021/acscatal.3c00759'
    },
    {
        id: 'JOLD-013',
        title: '机器学习技术在眼健康领域的应用',
        authors: '叶旭, 杜一, 崔文娟, 沈俊杰, 谢靖, 王露笛,',
        journal: '数据与计算发展前沿',
        year: 2023, sort_year: 2023, direction: 'ai-for-science', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-014',
        title: '中国常见神话人物起源母题数据集',
        authors: '王京, 熊惠, 其乐格乐, 杜一, 周园春,',
        journal: '中国科学数据',
        year: 2023, sort_year: 2023, direction: 'ai-for-science', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-015',
        title: 'A corpus of CO2 electrocatalytic reduction process extracted from the scientific literature',
        authors: 'Ludi Wang, Yang Gao, Xueqing Chen, Wenjuan Cui, Yuanchun Zhou,Xinying Luo, Shuaishuai Xu,Yi Du*, Bin Wang*,',
        journal: 'Scientific Data',
        year: 2023, sort_year: 2023, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:8.5,JCR Q1,中科院二区)',
        url: ''
    },
    {
        id: 'JOLD-016',
        title: 'Hierarchical Interdisciplinary Topic Detection Model for Research Proposal Classification',
        authors: 'Meng Xiao, Ziyue Qiao, Yanjie Fu, Hao Dong, Yi Du*, Pengyang Wang, Hui Xiong, Yuanchun Zhou*,',
        journal: 'IEEE Transactions on Knowledge and Data Engineering',
        year: 2023, sort_year: 2023, direction: 'knowledge-graph', type: 'journal', meta: '(CCF Rank A，SCI IF:9.6,JCR Q1,中科院一区Top)',
        url: 'https://ieeexplore.ieee.org/document/10052697/'
    },
    {
        id: 'JOLD-017',
        title: 'A Dual-Channel Semi-Supervised Learning Framework on Graphs via Knowledge Transfer and Meta-Learning',
        authors: 'Ziyue Qiao, Pengyang Wang, Pengfei Wang, Zhiyuan Ning, Yanjie Fu, Yi Du, Yuanchun Zhou*, Jianqiang Hua, Xian-sheng Hua, Hui Xiong*,',
        journal: 'ACM Transactions on the Web',
        year: 2023, sort_year: 2023, direction: 'knowledge-graph', type: 'journal', meta: '(CCF Rank C，SCI IF:3.6,JCR Q1, 中科院四区)',
        url: ''
    },
    {
        id: 'JOLD-018',
        title: '基于预训练模型的军事领域命名实体识别研究',
        authors: '童昭*, 王露笛, 朱小杰, 杜一',
        journal: '数据与计算前沿',
        year: 2022, sort_year: 2022, direction: 'knowledge-graph', type: 'journal', meta: '4(5).', url: ''
    },
    {
        id: 'JOLD-019',
        title: '基于TPA-Transformer的机票价格预测',
        authors: '申志豪,李娜,尹世豪*,杜一,胡良霖,',
        journal: '数据与计算前沿',
        year: 2022, sort_year: 2022, direction: 'others', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-020',
        title: '基于多标签分类的科技文献学科交叉研究性质识别',
        authors: '王卫军, 宁致远, 杜一*,周园春,',
        journal: '数据分析与知识发现',
        year: 2022, sort_year: 2022, direction: 'knowledge-graph', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-021',
        title: 'RPT: Toward Transferable Model on Heterogeneous Researcher Data via Pre-Training',
        authors: 'Ziyue Qiao,Yanjie Fu,Pengyang Wang,Meng Xiao,Zhiyuan Ning,Yi Du*,Yuanchun Zhou,',
        journal: 'IEEE Transactions on Big Data',
        year: 2022, sort_year: 2022, direction: 'knowledge-graph', type: 'journal', meta: '(CCF Rank C, SCI IF:5.7,JCR Q1, 中科院二区)',
        url: ''
    },
    {
        id: 'JOLD-022',
        title: '构建国家科研论文和科技信息高端交流平台的政策与路径探析',
        authors: '范英杰,吕栋,李东,杜一,韩宇*,',
        journal: '图书与情报',
        year: 2021, sort_year: 2021, direction: 'others', type: 'journal', meta: '6.', url: ''
    },
    {
        id: 'JOLD-023',
        title: '国家自然科学基金资助成果开放共享平台',
        authors: '李东,于笑丰,杜一*,刘静羽,',
        journal: '中国科学基金',
        year: 2021, sort_year: 2021, direction: 'others', type: 'journal', meta: '05.', url: ''
    },
    {
        id: 'JOLD-024',
        title: '全球科学数据出版发展态势分析',
        authors: '王卫军,李成赞,郑晓欢,褚大伟,姜璐璐,陈昕,杜一,周园春*,',
        journal: '中国科学数据',
        year: 2021, sort_year: 2021, direction: 'others', type: 'journal', meta: '6(3), 2021.', url: ''
    },
    {
        id: 'JOLD-025',
        title: 'A novel image dehazing framework for robust vision-based intelligent systems',
        authors: 'Farah Deeba#, Fayaz A. Dharejo#, Muhammad Zawish, Fida H. Memon, Kapal Dev, Rizwan A. Naqvi, Yuanchun Zhou*, Yi Du,',
        journal: 'International Journal of Intelligent Systems',
        year: 2021, sort_year: 2021, direction: 'others', type: 'journal', meta: '(SCI IF:8.7, JCR Q1)', url: ''
    },
    {
        id: 'JOLD-026',
        title: 'Machine learning techniques and research framework in foodborne disease surveillance system',
        authors: 'Yi Du*, Yunchang Guo,',
        journal: 'Food Control, 131:108448',
        year: 2021, sort_year: 2021, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:5.55, JCR Q1)', url: ''
    },
    {
        id: 'JOLD-027',
        title: 'Foodborne Disease Risk Prediction using Multi-Graph Structural LSTM: Algorithm Design and Validation Study',
        authors: 'Yi Du*, Hanxue Wang, Wenjuan Cui, Hengshu Zhu, Yunchang Guo, Fayaz Ali Dharejo, Yuanchun Zhou,',
        journal: 'JMIR Medical Informatics, 9(8):e29433',
        year: 2021, sort_year: 2021, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:2.58)', url: ''
    },
    {
        id: 'JOLD-028',
        title: '基于词嵌入的国家自然科学基金学科交叉知识发现方法——以“人工智能”与“信息管理”为例',
        authors: '王卫军, 姚畅, 乔子越, 崔文娟, 杜一*, 周园春',
        journal: '情报学报, 40(8):831-845',
        year: 2021, sort_year: 2021, direction: 'knowledge-graph', type: 'journal', meta: '（FMS T1)', url: ''
    },
    {
        id: 'JOLD-029',
        title: '基于 ORCID 和加权跨层边聚类系数的研究者社区发现',
        authors: '王毅蒙, 田野, 孙善鹏, 周园春, 杜一',
        journal: '计算机系统应用, 30(6):45-53',
        year: 2021, sort_year: 2021, direction: 'knowledge-graph', type: 'journal', meta: '（CCF中文C类)', url: ''
    },
    {
        id: 'JOLD-030',
        title: 'High-efficiency Machine Learning Method for Identifying Foodborne Disease Outbreaks and Confounding Factors',
        authors: 'Peng Zhang, Wenjuan Cui, Hanxue Wang, Yuanchun Zhou, Yi Du*',
        journal: 'Foodborne Pathogens and Disease, 18(8):590-598',
        year: 2021, sort_year: 2021, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:2.6, JCR Q2)', url: ''
    },
    {
        id: 'JOLD-031',
        title: 'Multi-scale Single Image Super-Resolution with Remote-Sensing Application Using Transferred Wide Residual Network',
        authors: 'Farah Deeba, Yuanchun Zhou, Fayaz Ali Dharejo, Yi Du, Xuezhi Wang*, She Kun',
        journal: 'Wireless Personal Communications, 120:323–342',
        year: 2021, sort_year: 2021, direction: 'others', type: 'journal', meta: '(SCI IF:1.07)', url: ''
    },
    {
        id: 'JOLD-032',
        title: 'Single Image Remote Sensing Super-Resolution Combined with the Transferred Generative Adversarial Network and Wavelet Transformation',
        authors: 'Fayaz Ali Dharejo, Farah Deeba, Yuanchun Zhou*, Das Bhagwan, Jatoi, Munsif Ali, Zawish Muhammad, Yi Du*, Xuezhi Wang',
        journal: 'ACM Transactions on Intelligent Systems and Technology',
        year: 2021, sort_year: 2021, direction: 'others', type: 'journal', meta: '(CCF Rank B)', url: ''
    },
    {
        id: 'JOLD-033',
        title: 'A deep hybrid neural network for single image dehazing via wavelet transform',
        authors: 'Fayaz Ali Dharejo, Yuanchun Zhou, Farah Deeba*, Munsif Ali Jatoi, Muhammad Ashfaq Khan, Ghulam Ali Mallah, Abdul Ghaffar, Muhammad Chhattal, Yi Du, Xuezhi Wang*',
        journal: 'Optik,231:166462',
        year: 2021, sort_year: 2021, direction: 'others', type: 'journal', meta: '(SCI IF:2.2, JCR Q2)', url: ''
    },
    {
        id: 'JOLD-034',
        title: 'A Plexus-Convolutional Neural Network Framework for Fast Remote Sensing Image Super-Resolution in wavelet Domain',
        authors: 'Farah Deeba, Yuanchun Zhou, Fayaz Ali Dharejo*, Muhammad Ashfaq Khan, Bhagwan Das, Xuezhi Wang*, Yi Du',
        journal: 'IET Image Processing,15(8):1679-1687',
        year: 2021, sort_year: 2021, direction: 'others', type: 'journal', meta: '(SCI IF:2.0)', url: ''
    },
    {
        id: 'JOLD-035',
        title: 'Prediction of Foodborne Diseases Pathogens: A Machine Learning Approach',
        authors: 'Hanxue Wang, Wenjuan Cui, Yunchang Guo, Yi Du*, Yuanchun Zhou',
        journal: 'JMIR Medical Informatics,9(1):e24924',
        year: 2020, sort_year: 2020, direction: 'ai-for-science', type: 'journal', meta: '(SCI IF:2.58)', url: ''
    },
    {
        id: 'JOLD-036',
        title: '一种基于机器学习的食源性疾病致病菌识别方法',
        authors: '王寒雪,崔文娟,周园春,杜一',
        journal: '数据分析与知识发现',
        year: 2020, sort_year: 2020, direction: 'ai-for-science', type: 'journal', meta: '(CCF中文C类,FMS T2)', url: ''
    },
    {
        id: 'JOLD-037',
        title: 'A remote‐sensing image enhancement algorithm based on patch‐wise dark channel prior and histogram equalisation with colour correction',
        authors: 'Fayaz Ali Dharejo, Yuanchun Zhou, Farah Deeba, Munsif Ali Jatoi, Yi Du, Xuezhi Wang',
        journal: 'IET Image Processing, 15(1):47-56',
        year: 2020, sort_year: 2020, direction: 'others', type: 'journal', meta: '(SCI IF:2.0)', url: ''
    },
    {
        id: 'JOLD-038',
        title: '烟草科技知识图谱服务平台的设计与实现',
        authors: '王永胜,冯伟华,郑新章,刘亚丽,贾楠,王锐,宗国浩,王迪,杜一',
        journal: '计算机应用与软件(已录用)',
        year: 2020, sort_year: 2020, direction: 'knowledge-graph', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-039',
        title: '模型驱动的大数据流水线框架PiFlow',
        authors: '朱小杰, 赵子豪, 杜一*',
        journal: '计算机应用, 40(6):1638-1647',
        year: 2020, sort_year: 2020, direction: 'others', type: 'journal', meta: '(CCF T2)', url: ''
    },
    {
        id: 'JOLD-040',
        title: '科技大数据知识图谱构建方法及应用研究综述',
        authors: '周园春,王卫军,乔子越,肖濛,杜一*',
        journal: '中国科学 信息科学, 50(7):957-987',
        year: 2020, sort_year: 2020, direction: 'knowledge-graph', type: 'journal', meta: '(CCF T1)', url: ''
    },
    {
        id: 'JOLD-041',
        title: '基于引文网络社区发现的数据推荐研究',
        authors: '李成赞,黎建辉,沈志宏,杜一',
        journal: '情报学报,40(8):879-886',
        year: 2021, sort_year: 2021, direction: 'knowledge-graph', type: 'journal', meta: '(FMS T1)', url: ''
    },
    {
        id: 'JOLD-042',
        title: 'A Color Enhancement Scene Estimation Approach for Single Image Haze Removal',
        authors: 'Dharejo Fayaz Ali, Zhou Yuanchun, Deeba Farah, Du Yi',
        journal: 'Geoscience and Remote Sensing Letters,17(9):1613-1617',
        year: 2019, sort_year: 2019, direction: 'others', type: 'journal', meta: '(SCI IF:3.5,JCR Q1)', url: ''
    },
    {
        id: 'JOLD-043',
        title: '一种基于层次分割和聚合的大数据流水线任务处理方法',
        authors: '陈天乐,蒲军,朱小杰,崔文娟,冯伟华,王锐,杜一*,周园春',
        journal: '科研信息化技术与应用,10(1):3-11',
        year: 2019, sort_year: 2019, direction: 'others', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-044',
        title: 'SKS：一种科技领域大数据知识图谱平台',
        authors: '周园春, 常青玲, 杜一*',
        journal: '数据与计算发展前沿（创刊号）, 1(1):8',
        year: 2019, sort_year: 2019, direction: 'knowledge-graph', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-045',
        title: 'Spatiotemporal Trend Analysis of PM2.5 Concentration in China, 1999–2016',
        authors: 'Jianghua Zhao, Xuezhi Wang, Hongqing Song, Yi Du, Wenjuan Cui and Yuanchun Zhou*',
        journal: 'Atmosphere, 10(8):461',
        year: 2019, sort_year: 2019, direction: 'ai-for-science', type: 'journal', meta: '(SCI)', url: ''
    },
    {
        id: 'JOLD-046',
        title: '国家自然科学基金大数据知识管理服务平台总体方案及关键技术研究',
        authors: '姚畅, 王晓帆, 杜一, 张兆田, 李建军, 郝艳妮',
        journal: '中国科学基金,33(1):55-61',
        year: 2019, sort_year: 2019, direction: 'others', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-047',
        title: '智能时代人机交互的一些思考',
        authors: '范俊君, 戴国忠, 杜一, 刘正捷, 田丰,',
        journal: '中国科学(信息科学), 48(4):361-375',
        year: 2018, sort_year: 2018, direction: 'others', type: 'journal', meta: '(CCF T1)', url: ''
    },
    {
        id: 'JOLD-048',
        title: 'A Correlation Visual Analytics System for Air Quality',
        authors: 'Yi Du, Abish Malik, Lianke Zhou, Yuanchun Zhou,',
        journal: 'Chinese Journal of Electronics, 27(5):920-926',
        year: 2018, sort_year: 2018, direction: 'ai-for-science', type: 'journal', meta: '(SCI, CCF T1)', url: ''
    },
    {
        id: 'JOLD-049',
        title: 'Banded Choropleth Map',
        authors: 'Yi Du, Lei Ren, Yuanchun Zhou, Jianhui Li, Feng Tian, Guozhong Dai,',
        journal: 'Personal and Ubiquitous Computing, 22(3):503-510',
        year: 2017, sort_year: 2017, direction: 'others', type: 'journal', meta: '(SCI, CCF Rank C)', url: ''
    },
    {
        id: 'JOLD-050',
        title: '基于真实感层级框架的自然用户界面评估方法研究',
        authors: '吕菲, 田丰, 杜一, 陈凯翔, 侯文君, 戴国忠,',
        journal: '计算机辅助设计与图形学学报,29(11):',
        year: 2076, sort_year: 2076, direction: 'others', type: 'journal', meta: '-2082, 2017. (CCF T1)', url: ''
    },
    {
        id: 'JOLD-051',
        title: 'A Sliding Window based Multi-stage Clustering and Probabilistic Forecasting Approach for Large Multivariate Time Series Data',
        authors: 'Lei Ren, Yongchang Wei, Jin Cui, Yi Du,',
        journal: 'Journal of Statistical Computation and Simulation (GSCS), 87(13):2494-2508',
        year: 2017, sort_year: 2017, direction: 'others', type: 'journal', meta: '(SCI)', url: ''
    },
    {
        id: 'JOLD-052',
        title: 'An Algorithm for Event Detection Based on Social Media Data',
        authors: 'Wenjuan Cui, Pengfei Wang, Xin Chen, Yi Du, Danhuai Guo, Yuanchun Zhou, Jianhui Li,',
        journal: 'Neurocomputing,254:53-58',
        year: 2017, sort_year: 2017, direction: 'others', type: 'journal', meta: '(SCI, CCF Rank C, JCR Q2)', url: ''
    },
    {
        id: 'JOLD-053',
        title: 'A Visual Analytics Approach for Station-based Air Quality Data',
        authors: 'Yi Du, Cuixia Ma, Chao Wu, Xiaowei Xu, Yike Guo, Yuanchun Zhou, Jianhui Li,',
        journal: 'Sensors (Big Data and Cloud Computing for Sensor Networks),17(1):30',
        year: 2017, sort_year: 2017, direction: 'others', type: 'journal', meta: '(SCI, JCR Q2)', url: ''
    },
    {
        id: 'JOLD-054',
        title: '基于多源出行数据的居民行为模式分析方法',
        authors: '徐晓伟, 杜一, 周园春,',
        journal: '计算机应用, 37(8):2362-2367',
        year: 2017, sort_year: 2017, direction: 'others', type: 'journal', meta: '(CCF T2)', url: ''
    },
    {
        id: 'JOLD-055',
        title: '一种模型驱动的可视化生成系统',
        authors: '杜一, 郭旦怀, 陈昕, 任磊, 戴国忠,',
        journal: '软件学报,27(5):1199-1211',
        year: 2016, sort_year: 2016, direction: 'others', type: 'journal', meta: '(CCF T1)', url: ''
    },
    {
        id: 'JOLD-056',
        title: 'E-UIDL用户界面描述语言下的开发方法',
        authors: '杜一, 田丰, 戴国忠,',
        journal: '软件学报, 26(7):1772-1784',
        year: 2015, sort_year: 2015, direction: 'others', type: 'journal', meta: '(CCF T1)', url: ''
    },
    {
        id: 'JOLD-057',
        title: '一种大规模时空数据处理与可视化框架',
        authors: '杜一, 郭旦怀, 周园春, 黎建辉,',
        journal: '计算机研究与发展, 51(s2):10-17',
        year: 2015, sort_year: 2015, direction: 'others', type: 'journal', meta: '(CCF T1)', url: ''
    },
    {
        id: 'JOLD-058',
        title: '面向小界面大数据可视化的语义Focus+Context人机交互技术',
        authors: '任磊, 魏永长, 杜一, 戴国忠,',
        journal: '计算机学报, 38(12):2488-2498',
        year: 2015, sort_year: 2015, direction: 'others', type: 'journal', meta: '(CCF T1)', url: ''
    },
    {
        id: 'JOLD-059',
        title: '大数据可视分析综述',
        authors: '任磊, 杜一, 马帅, 张小龙,',
        journal: '软件学报, 25(19):',
        year: 1909, sort_year: 1909, direction: 'others', type: 'journal', meta: '-1936, 2014. (CCF T1)', url: ''
    },
    {
        id: 'JOLD-060',
        title: '杜一',
        authors: '杜一, 田丰, 马翠霞, 戴国忠, 基于多尺度描述方法的移动用户界面生成框架, 计算机学报. 36(11):2179-2190, 2013. (CCF T1)',
        journal: '',
        year: 0, sort_year: 0, direction: 'others', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-061',
        title: '杜一',
        authors: '杜一, 任磊, DaisyVA:支持信息多面体可视分析的智能交互式可视化平台, 计算机辅助设计与图形学学报, 25(8):1177-1182, 2013. (CCF T1)',
        journal: '',
        year: 0, sort_year: 0, direction: 'others', type: 'journal', meta: '', url: ''
    },
    {
        id: 'JOLD-062',
        title: '一种可扩展的用户界面描述语言',
        authors: '杜一, 邓昌智, 田丰, 戴国忠,',
        journal: '软件学报, 24(5):1127-1142',
        year: 2013, sort_year: 2013, direction: 'others', type: 'journal', meta: '(CCF T1)', url: ''
    },
    {
        id: 'JOLD-063',
        title: '一种支持超视频创建与可视呈现的草图界面技术',
        authors: '杜一, 吕菲, 田丰, 侯文君, 马翠霞, 戴国忠,',
        journal: '软件学报, 24(s2):32-41',
        year: 2013, sort_year: 2013, direction: 'others', type: 'journal', meta: '(CCF T1)', url: ''
    },
    {
        id: 'JOLD-064',
        title: '一种移动环境下的用户模型',
        authors: '杜一, 田丰, 王锋, 戴国忠, 王宏安,',
        journal: '软件学报, 22(s1):120-128',
        year: 2011, sort_year: 2011, direction: 'others', type: 'journal', meta: '(CCF T1)', url: ''
    },
    {
        id: 'JOLD-065',
        title: 'CONCEPT-SKETCH: A Tool for Cooperative Visual Analytics',
        authors: 'Yi Du, Cuixia Ma, Dongxing Teng,Guozhong Dai,',
        journal: 'International Journal of Advanced Intelligence (IJAI), vol. 3, no. 1:95-113',
        year: 2011, sort_year: 2011, direction: 'others', type: 'journal', meta: '', url: ''
    },
    ], conference: [{
        id: 'COLD-027',
        title: 'Beyond Paper-to-Paper: Structured Profiling and Rubric Scoring for Paper-Reviewer Matching',
        authors: 'Yicheng Pan, Zhiyuan Ning, Ludi Wang, Yi Du*.',
        venue: 'International Joint Conference on Neural Networks (IJCNN 2026).',
        year: 2026, sort_year: 2026, direction: 'knowledge-graph', type: 'conference', meta: '(CCF Rank C)', url: ''
    },{
        id: 'COLD-026',
        title: 'CITE: Benchmarking Heterogeneous Text-Attributed Graph Models',
        authors: 'Chenghao Zhang, Chenghao_Zhang, Qingqing Long, Ludi Wang, Wenjuan Cui, Jianjun Yu*, Yi Du*.',
        venue: 'The 64th Annual Meeting of the Association for Computational Linguistics (ACL 2026).',
        year: 2026, sort_year: 2026, direction: 'ai-for-science', type: 'conference', meta: '(CCF Rank A)', url: 'https://arxiv.org/abs/2508.15392'
    },{
        id: 'COLD-001',
        title: 'CatalystBench: A Comprehensive Multi-Task Benchmark for Advancing Language Models in Catalysis Science',
        authors: 'Xueqing Chen, Jian Xu, Ludi Wang, Yang Gao, Huihan Zhu, Yuanchun Zhou, Yi Du*, Cheng-Lin Liu*.',
        venue: 'The Fourteenth International Conference on Learning Representations (ICLR).',
        year: 2026, sort_year: 2026, direction: 'ai-for-science', type: 'conference', meta: '(CCF Rank A)', url: ''
    },
    {
        id: 'COLD-002',
        title: 'Disentangled Multi-span Evolutionary Network against Temporal Knowledge Graph Reasoning',
        authors: 'Hao Dong, Ziyue Qiao, Zhiyuan Ning, Qi Hao, Yi Du, Pengyang Wang*, Yuanchun Zhou.',
        venue: 'The 61st Annual Meeting of the Association for Computational Linguistics(ACL)',
        year: 2025, sort_year: 2025, direction: 'knowledge-graph', type: 'conference', meta: '(CCF Rank A)', url: ''
    },
    {
        id: 'COLD-003',
        title: 'AutoDive+: An Adaptive Model Enhanced Multimodal Online Annotation Tool',
        authors: 'Ludi Wang, Dongze Song, Qiang Cui, Xueqing Chen, Yuanchun Zhou, Wenjuan Cui*, Yi Du*.',
        venue: 'Proceedings of the ACM Web Conference（WWW 2025 Demo Track）',
        year: 2025, sort_year: 2025, direction: 'ai-for-science', type: 'conference', meta: '(CCF Rank A）', url: ''
    },
    {
        id: 'COLD-004',
        title: 'DP-CRE: Continual Relation Extraction via Decoupled Contrastive Learning and Memory Structure Preservation',
        authors: 'Mengyi Huang, Meng Xiao, Ludi Wang, Yi Du*.',
        venue: 'The Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024).',
        year: 2024, sort_year: 2024, direction: 'ai-for-science', type: 'conference', meta: ' (CCF Rank B）', url: ''
    },
    {
        id: 'COLD-005',
        title: 'RDKG: A Reinforcement Learning Framework for Disease Diagnosis on Knowledge Graph',
        authors: 'Shipeng Guo, Kunpeng Liu, Pengfei Wang, Wenjuan Cui*, Weiwei Dai, Yi Du, Yuanchun Zhou.',
        venue: '23st IEEE International Conference on Data Mining (ICDM). ',
        year: 2023, sort_year: 2023, direction: 'knowledge-graph', type: 'conference', meta: '(CCF Rank B）', url: ''
    },
    {
        id: 'COLD-006',
        title: 'Autodive: An Integrated Onsite Scientific Literature Annotation Tool',
        authors: 'Yi Du*, Ludi Wang, Mengyi Huang, Dongze Song, Wenjuan Cui, Yuanchun Zhou*.(2023)',
        venue: 'The 61st Annual Meeting of the Association for Computational Linguistics(ACL demo track).',
        year: 2023, sort_year: 2023, direction: 'knowledge-graph', type: 'conference', meta: ' (CCF Rank A)', url: ''
    },
    {
        id: 'COLD-007',
        title: 'NEEDED: Introducing Hierarchical Transformer to Eye Diseases Diagnosis',
        authors: 'Xu Ye, Meng Xiao, Zhiyuan Ning, Weiwei Dai, Wenjuan Cui, Yi Du*, Yuanchun Zhou.(2023)',
        venue: 'SIAM International Conference on Data Mining（SDM23）. (CCF Rank B)',
        year: 2023, sort_year: 2023, direction: 'ai-for-science', type: 'conference', meta: '', url: ''
    },
    {
        id: 'COLD-008',
        title: 'A Knowledge Graph Based Approach to Operational Coordination Recognition in Wargame',
        authors: 'Chenye Song, Ludi Wang*, Yi Du, Xiao Xu, Shengming Guo, Xiaoyuan He, Lin Wu.(2022)',
        venue: '第三十四届中国仿真大会会议暨第二十一届亚洲仿真会议',
        year: 2022, sort_year: 2022, direction: 'ai-for-science', type: 'conference', meta: '', url: ''
    },
    {
        id: 'COLD-009',
        title: 'Expert Knowledge-Guided Length-Variant Hierarchical Label Generation for Proposal Classification',
        authors: 'Meng Xiao, Ziyue Qiao, Yanjie Fu, Yi Du*, Pengyang Wang, and Yuanchun Zhou. (2021)',
        venue: '21st IEEE International Conference on Data Mining (ICDM).',
        year: 2021, sort_year: 2021, direction: 'knowledge-graph', type: 'conference', meta: ' (CCF Rank B）', url: ''
    },
    {
        id: 'COLD-010',
        title: 'An Interactive Neurual Network Approach to Keyphrase Extraction in Talent Recruitment',
        authors: 'Kaichun Yao, Chuan Qin, Hengshu Zhu, Chao Ma, Jingshuai Zhang, Yi Du, Hui Xiong. (2021)',
        venue: '30th ACM International Conference on Information and Knowledge Management (CIKM',
        year: 2021, sort_year: 2021, direction: 'ai-for-science', type: 'conference', meta: '(CCF Rank B）', url: ''
    },
    {
        id: 'COLD-011',
        title: 'Data Augmentation for Graph Convolutional Network on Semi-Supervised Classification',
        authors: 'Zhengzheng Tang, Ziyue Qiao, Xuehai Hong, Yang Wang, Fayaz Ali Dharejo, Yuanchun Zhou, Yi Du. (2021)',
        venue: 'The 5th Asia Pacific Web (APWeb) and Web-Age Information Management (WAIM) Joint International Conference on Web and Big Data (APWeb-WAIM). ',
        year: 2021, sort_year: 2021, direction: 'others', type: 'conference', meta: '(CCF Rank C）', url: ''
    },
    {
        id: 'COLD-012',
        title: 'LightCAKE: A Lightweight Framework for Context-Aware Knowledge Graph Embedding',
        authors: 'Zhiyuan Ning, Ziyue Qiao, Hao Dong, Yi Du*, Yuanchun Zhou. (2021)',
        venue: 'The 25th Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD-2021).',
        year: 2021, sort_year: 2021, direction: 'knowledge-graph', type: 'conference', meta: ' (CCF Rank C）', url: ''
    },
    {
        id: 'COLD-013',
        title: 'Tree Structure-Aware Graph Representation Learning via Integrated Hierarchical Aggregation and Relational Metric Learning',
        authors: 'Ziyue Qiao, Pengyang Wang, Yanjie Fu, Yi Du*, Pengfei Wang, Yuanchun Zhou. (2020)',
        venue: 'The 20th IEEE International Conference on Data Mining (ICDM)',
        year: 2020, sort_year: 2020, direction: 'knowledge-graph', type: 'conference', meta: '（CCF Rank B）', url: ''
    },
    {
        id: 'COLD-014',
        title: 'Unsupervised Author Disambiguation using Heterogeneous Graph Convolutional Network Embedding',
        authors: 'Ziyue Qiao, Yi Du*, Yanjie Fu, Pengfei Wang, Yuanchun Zhou. (2019)',
        venue: 'IEEE International Conference on Big Data',
        year: 2019, sort_year: 2019, direction: 'knowledge-graph', type: 'conference', meta: '（CCF Rank C）', url: ''
    },
    {
        id: 'COLD-015',
        title: 'Controlled Experiment of Banded Choropleth Map',
        authors: 'Yi Du, Jia Li, Yuanchun Zhou',
        venue: 'HHME',
        year: 2018, sort_year: 2018, direction: 'others', type: 'conference', meta: '', url: ''
    },
    {
        id: 'COLD-016',
        title: 'Personalized Microblog Recommendation Using Sentimental Features',
        authors: 'Wenjuan Cui, Yi Du, Zhihong Shen, Yuanchun Zhou, Jianhui Li. (2017)',
        venue: '. IEEE International Conference on Big Data and Smart Computing (IEEE BigComp',
        year: 2017, sort_year: 2017, direction: 'others', type: 'conference', meta: ').', url: ''
    },
    {
        id: 'COLD-017',
        title: 'An Optimization Method for User Interface Components Based on Big Data',
        authors: 'Fei Lyu, Lei Ren, Yi Du (2017)',
        venue: '. In: Zhang L., Ren L., Kordon F. (eds) Challenges and Opportunity with Big Data. Monterey Workshop',
        year: 2016, sort_year: 2016, direction: 'others', type: 'conference', meta: 'Lecture Notes in Computer Science, vol 10228. Springer, Cham', url: ''
    },
    {
        id: 'COLD-018',
        title: 'A Model-Driven Visualization System Based on DVDL',
        authors: 'Yi Du, Lei Ren, Yuanchun Zhou, Jiahui Li',
        venue: '. In: Zhang L., Ren L., Kordon F. (eds) Challenges and Opportunity with Big Data. Monterey Workshop',
        year: 2016, sort_year: 2016, direction: 'others', type: 'conference', meta: 'Lecture Notes in Computer Science, vol 10228. Springer, Cham', url: ''
    },
    {
        id: 'COLD-019',
        title: 'How to Use the Social Media Data in Assisting Restaurant Recommendation',
        authors: 'Wenjuan Cui, Pengfei Wang, Xin Chen, Yi Du, Danhuai Guo, Yuanchun Zhou, Jianhui Li',
        venue: 'Database Systems for Advanced Applications: DASFAA 2016 International Workshops: BDMS, BDQM, MoI, and SeCoP, Dallas, TX, USA, April 16-19, 2016, Proceedings (pp. 134-141). Cham: Springer International Publishing.',
        year: 2016, sort_year: 2016, direction: 'others', type: 'conference', meta: '', url: ''
    },
    {
        id: 'COLD-020',
        title: 'DVIZ: A Model-driven Visualization Generation System (Poster),',
        authors: 'Yi Du, Qianyu Liu, Yuanchun Zhou, Jianhui Li',
        venue: 'IEEE Symposium on Visual Analytics Science and Technology (VAST) 2015, Chicago, USA, 2015.',
        year: 2015, sort_year: 2015, direction: 'others', type: 'conference', meta: '', url: ''
    },
    {
        id: 'COLD-021',
        title: 'A Visualization Platform for Spario-Temporal Data: a Data Intensive Computation Framework',
        authors: 'Danhuai Guo, Yi Du',
        venue: 'in the 23rd International conference on Geoinformatics 2015, Wuhan, China, 2015.',
        year: 2015, sort_year: 2015, direction: 'others', type: 'conference', meta: '', url: ''
    },
    {
        id: 'COLD-022',
        title: 'A Sketch+Fisheye Interface for Visual Analytics of Large Time-Series',
        authors: 'Lei Ren,Yi Du,',
        venue: '(Poster), in IEEE Symposium on Visual Analytics Science and Technology (VAST)',
        year: 2014, sort_year: 2014, direction: 'others', type: 'conference', meta: 'Paris, France, 2014:265-266.', url: ''
    },
    {
        id: 'COLD-023',
        title: 'Multilevel Interaction Model For Hierarchical Tasks In Information Visualization',
        authors: 'Lei Ren, Jin Cui, Yi Du,Guozhong Dai,',
        venue: 'in The 6th International Symposium on Visual Information Communication and Interaction (VINCI) Tianjin, China, 2013:11-16. ',
        year: 2013, sort_year: 2013, direction: 'others', type: 'conference', meta: '（EI）', url: ''
    },
    {
        id: 'COLD-024',
        title: 'SpeechTouch: Precise Cursor Positioning on Touch Screen Mobiles',
        authors: 'Yingying Jiang, Feng Tian, Guang Li, Xiaolong (Luke) Zhang, Yi Du, Guozhong Dai,Hongan Wang',
        venue: 'in 15th International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI 2013), Munich, 2013.（EI）',
        year: 2013, sort_year: 2013, direction: 'others', type: 'conference', meta: '', url: ''
    },
    {
        id: 'COLD-025',
        title: 'Cooperative Concept Map Based on Cognitive Model for Visual Analysis',
        authors: 'Yi Du, Cuixia Ma, Dongxing Teng,Guozhong Dai',
        venue: 'in The 3rd Visual Information Communication - International Symposium (VINCI 2010), Beijing, China, 2010:76-83.（EI） Cuixia Ma, Yi Du, Dongxing Teng, Jia Chen, Hongan Wang, Guozhong Dai, An Adaptive Sketching User Interface for Education System in Virtual Reality, in Proceedings 2009 IEEE International Symposium on IT in Medicine and Education (ITME 2009), Jinan, China, 2009:796-802.（EI）',
        year: 2010, sort_year: 2010, direction: 'others', type: 'conference', meta: '', url: ''
    },
    ]
};

// ============================================
// 专利数据 - Patents Data
const patentsData = [{
    id: 'POLD-001',
    title: '一种基于动态偏好学习的交互式多目标贝叶斯优化方法及系统.(初审) 完成人：马雨婕,王露笛,崔文娟,杜一',
    inventors: '马雨婕,王露笛,崔文娟,杜一',
    number: '2025111387336',
    status: 'applied', type: 'china', year: 2025
},
{
    id: 'POLD-002',
    title: '基于对比学习的篇章级预训练科学文献表示及查询方法.(实审) 完成人：陈鸣,王露笛,杜一,宋东泽,崔文娟',
    inventors: '陈鸣,王露笛,杜一,宋东泽,崔文娟',
    number: '202510290906X',
    status: 'exam', type: 'china', year: 2025
},
{
    id: 'POLD-003',
    title: '一种基于知识图谱的微生物合成纳米材料推荐方法.(已授权) 完成人：王露笛,刘宇峰,宁致远,崔文娟,杜义华,杜一,周园春',
    inventors: '王露笛,刘宇峰,宁致远,崔文娟,杜义华,杜一,周园春',
    number: '2024115344890',
    status: 'authorized', type: 'china', year: 2024
},
{
    id: 'POLD-004',
    title: '一种基于深度学习的多模态标注方法.(已授权) 完成人：崔强,宋东泽,王露笛,崔文娟,杜一',
    inventors: '崔强,宋东泽,王露笛,崔文娟,杜一',
    number: 'CN202411157253.X',
    status: 'authorized', type: 'china', year: 2024
},
{
    id: 'POLD-005',
    title: '一种C02催化领域的多层次、广类别命名实体识别方法.(实审) 完成人：杜一,陈雪青,王露笛,崔文娟,周园春',
    inventors: '杜一,陈雪青,王露笛,崔文娟,周园春',
    number: 'CN2024116458051',
    status: 'exam', type: 'china', year: 2024
},
{
    id: 'POLD-006',
    title: '基于知识图谱增强的自动可解释性疾病自动诊断装置.(申请) 完成人：崔文娟,郭仕鹏,王鹏飞,杜一,周园春',
    inventors: '崔文娟,郭仕鹏,王鹏飞,杜一,周园春',
    number: 'CN202211687077.1',
    status: 'applied', type: 'china', year: 2022
},
{
    id: 'POLD-007',
    title: '一种PDF文档智能标注与抽取方法.(已授权) 完成人：王露笛,黄梦依,宋东泽,崔文娟,杜一',
    inventors: '王露笛,黄梦依,宋东泽,崔文娟,杜一',
    number: '2023100169451',
    status: 'authorized', type: 'china', year: 2023
},
{
    id: 'POLD-008',
    title: '基于电子病历的眼科疾病信息提取方法和辅助诊断装置.(申请) 完成人：崔文娟,叶旭,杜一',
    inventors: '崔文娟,叶旭,杜一',
    number: '2022113126178',
    status: 'applied', type: 'china', year: 2022
},
{
    id: 'POLD-009',
    title: '一种基于LightGBM分类与表示学习的姓名消歧方法和系统.(已授权) 完成人：董昊,宁致远,杜一,周园春',
    inventors: '董昊,宁致远,杜一,周园春',
    number: '2021111535240',
    status: 'authorized', type: 'china', year: 2021
},
{
    id: 'POLD-010',
    title: '一种基于链接预测的食源性疾病暴发识别方法和系统.(已授权) 完成人：张鹏,叶旭,崔文娟,杜一',
    inventors: '张鹏,叶旭,崔文娟,杜一',
    number: '202210029619.X',
    status: 'authorized', type: 'china', year: 2022
},
{
    id: 'POLD-011',
    title: '一种可利用专家知识的申请书多标签层次分类方法.(已授权) 完成人：杜一,肖濛,乔子越,周园春',
    inventors: '杜一,肖濛,乔子越,周园春',
    number: '202110866392.X',
    status: 'authorized', type: 'china', year: 2021
},
{
    id: 'POLD-012',
    title: '无监督的基于表示学习的同名作者消歧方法及装置.(已授权) 完成人：杜一,董昊,周园春',
    inventors: '杜一,董昊,周园春',
    number: '202110240824.6',
    status: 'authorized', type: 'china', year: 2021
},
{
    id: 'POLD-013',
    title: '基于融合表征学习的学科分类体系对齐方法、系统及介质. 完成人：杜一,崔文韬,周园春',
    inventors: '杜一,崔文韬,周园春',
    number: '20211019712.6',
    status: 'applied', type: 'china', year: 2021
},
{
    id: 'POLD-014',
    title: '一种基于图局部结构和文本语义相似性的学术论文推荐方法.(已授权) 完成人：杜一,宁致远,乔子越,周园春',
    inventors: '杜一,宁致远,乔子越,周园春',
    number: '2020107306901',
    status: 'authorized', type: 'china', year: 2020
},
{
    id: 'POLD-015',
    title: '一种基于作者著作树和图神经网络的论文合作者推荐方法.(已授权) 完成人：杜一 乔子越 周园春 宁致远',
    inventors: '杜一 乔子越 周园春 宁致远',
    number: '2020107100862',
    status: 'authorized', type: 'china', year: 2020
},
{
    id: 'POLD-016',
    title: '一种科技资源汇聚与持续服务方法及装置.(已授权) 完成人：杜一 朱小杰、宋东泽、周园春',
    inventors: '杜一 朱小杰、宋东泽、周园春',
    number: '2020106925798',
    status: 'authorized', type: 'china', year: 2020
},
{
    id: 'POLD-017',
    title: '一种学者知识抽取与融合方法及装置. 完成人：杜一 朱小杰 周园春',
    inventors: '杜一 朱小杰 周园春',
    number: '2020106925798',
    status: 'applied', type: 'china', year: 2020
},
{
    id: 'POLD-018',
    title: '中国专利&PCT专利：一种基于网络表征和语义表征的同名作者消歧方法.(已授权,国际专利已授权) 完成人：杜一,王寒雪,乔子越,周园春',
    inventors: '杜一,王寒雪,乔子越,周园春',
    number: '2019113223833｜PCT/CN2019/128642',
    status: 'authorized', type: 'china', year: 2019
},
{
    id: 'POLD-019',
    title: '一种数据出版物学术影响力评价预测方法.(已授权) 完成人：李成赞,杜一',
    inventors: '李成赞,杜一',
    number: '201910749170.2',
    status: 'authorized', type: 'china', year: 2019
},
{
    id: 'POLD-020',
    title: '一种基于引文网络社区发现的数据推荐方法. 完成人：李成赞,杜一',
    inventors: '李成赞,杜一',
    number: '201910748028.6',
    status: 'applied', type: 'china', year: 2019
},
{
    id: 'POLD-021',
    title: '一种基于电路图元素隐喻的主题演化可视化方法.(已授权) 完成人：周连科,王红滨,王念滨,杜一,何鸣,宋奎勇,王瑛琦',
    inventors: '周连科,王红滨,王念滨,杜一,何鸣,宋奎勇,王瑛琦',
    number: '201610487736.5',
    status: 'authorized', type: 'china', year: 2016
},
{
    id: 'POLD-022',
    title: '一种基于深层循环神经网络的卷烟周期需求量预测算法.(已授权) 完成人：王露笛,杜一,周园春',
    inventors: '王露笛,杜一,周园春',
    number: '2019110945058',
    status: 'authorized', type: 'china', year: 2019
},
{
    id: 'POLD-023',
    title: '一种大数据ETL任务的编排方法与系统.(已授权) 完成人：朱小杰, 沈志宏, 杜一, 赵子豪, 周园春',
    inventors: '朱小杰, 沈志宏, 杜一, 赵子豪, 周园春',
    number: '2019103596584',
    status: 'authorized', type: 'china', year: 2019
},
{
    id: 'POLD-024',
    title: '一种大数据ETL任务的调度方法. 完成人：朱小杰，沈志宏，杜一',
    inventors: '朱小杰，沈志宏，杜一',
    number: '2019107529714',
    status: 'applied', type: 'china', year: 2019
},
{
    id: 'POLD-025',
    title: '一种基于异质图卷积神经网络嵌入的作者名字消歧方法.(已授权) 完成人： 杜一, 乔子越, 周园春',
    inventors: '杜一, 乔子越, 周园春',
    number: '2019106357994',
    status: 'authorized', type: 'china', year: 2019
},
{
    id: 'POLD-026',
    title: '一种基于异质网络嵌入的学者名字消歧方法. 完成人： 杜一, 乔子越, 周园春',
    inventors: '杜一, 乔子越, 周园春',
    number: '2018112671819',
    status: 'applied', type: 'china', year: 2018
},
{
    id: 'POLD-027',
    title: '一种融合图数据库和人工智能算法的数据管理系统.(已授权) 完成人： 沈志宏, 赵子豪, 周园春, 杜一',
    inventors: '沈志宏, 赵子豪, 周园春, 杜一',
    number: '201811212493X',
    status: 'authorized', type: 'china', year: 2018
},
{
    id: 'POLD-028',
    title: '一种混合型航标报警智能检测方法.(已授权) 完成人： 陶永, 陈金柱, 邓仕戈, 杜一, 沈志宏, 吴章生',
    inventors: '陶永, 陈金柱, 邓仕戈, 杜一, 沈志宏, 吴章生',
    number: '2017103839799',
    status: 'authorized', type: 'china', year: 2017
},
{
    id: 'POLD-029',
    title: '一种支持时序特征探查的统计地图绘制方法.(已授权) 完成人： 杜一, 周园春, 黎建辉',
    inventors: '杜一, 周园春, 黎建辉',
    number: '201610753059.7',
    status: 'authorized', type: 'china', year: 2016
},
{
    id: 'POLD-030',
    title: '一种时空延迟相关性可视化方法.(已授权) 完成人： 杜一, 周园春, 黎建辉',
    inventors: '杜一, 周园春, 黎建辉',
    number: '201610694753.6',
    status: 'authorized', type: 'china', year: 2016
},
{
    id: 'POLD-031',
    title: '一种基于主题流的时空延迟相关性可视化方法.(已授权) 完成人： 杜一, 周园春, 黎建辉',
    inventors: '杜一, 周园春, 黎建辉',
    number: '201610640243.0',
    status: 'authorized', type: 'china', year: 2016
},
{
    id: 'POLD-032',
    title: '一种基于气象数据的监测指标时空延迟相关性计算方法.(已授权) 完成人： 杜一, 崔文娟, 周园春, 黎建辉',
    inventors: '杜一, 崔文娟, 周园春, 黎建辉',
    number: '2016104650296',
    status: 'authorized', type: 'china', year: 2016
},
{
    id: 'POLD-033',
    title: '一种基于访问热度的时空数据服务调度方法.(已授权) 完成人： 郭旦怀, 杜一, 周园春, 黎建辉',
    inventors: '郭旦怀, 杜一, 周园春, 黎建辉',
    number: '2014108485284',
    status: 'authorized', type: 'china', year: 2014
},
{
    id: 'POLD-034',
    title: '一种基于WEB的多模型数据可视化开发方法及平台.(已授权) 完成人：杜一, 郭旦怀, 周园春, 黎建辉',
    inventors: '杜一, 郭旦怀, 周园春, 黎建辉',
    number: '2014108493971',
    status: 'authorized', type: 'china', year: 2014
},
{
    id: 'POLD-035',
    title: '一种交互式空间场景检索方法. (已授权) 完成人： 郭旦怀, 杜一, 周园春, 黎建辉',
    inventors: '郭旦怀, 杜一, 周园春, 黎建辉',
    number: '201310682924X',
    status: 'authorized', type: 'china', year: 2013
},
{
    id: 'POLD-036',
    title: '中国科学院计算机网络信息中心组编,孙德刚等编著 人工智能关键技术与应用实践. 科学出版社, 2025. 第4章',
    inventors: '',
    number: '',
    status: '', type: 'china', year: 2025
},
{
    id: 'POLD-037',
    title: '周园春,吴俊杰,钱力,杜一,刘冠男 创新方法新系统. 科学出版社, 2022',
    inventors: '',
    number: '',
    status: '', type: 'china', year: 2022
},
{
    id: 'POLD-038',
    title: '刘勇,杜一, 网络数据可视化与分析利器:Gephi中文教程. 电子工业出版社, 2017',
    inventors: '',
    number: '',
    status: '', type: 'china', year: 2017
},
{
    id: 'POLD-039',
    title: '戴国忠,田丰, 笔式用户界面 (第二版). 中国科技大学出版社, 2014. 第6章、第7章',
    inventors: '',
    number: '',
    status: '', type: 'china', year: 2014
},
]

// ============================================
// 科研项目数据 - Research Projects
// ============================================
const projectsData = {
    recent: [
        {
            id: 'PR2025-001',
            title: "某知识服务平台知识图谱总体集成",
            role: "负责人",
            period: "2025-2025",
            type: "platform"
        },
        {
            id: 'PR2025-002',
            title: "基于知识图谱与要素化大模型的基础研究科技成果评价体系及验证",
            role: "负责人",
            period: "2025-2025",
            source: "国家自然科学基金专项项目（与中国科学院文献情报中心合作）",
            type: "nsfc"
        },
        {
            id: 'PR2024-001',
            title: "科技大数据知识图谱",
            role: "负责人",
            period: "2024-2026",
            source: "国家自然科学基金优秀青年科学基金项目",
            type: "nsfc"
        },
        {
            id: 'PR2024-002',
            title: "基于领域知识图谱的光电催化材料挖掘软件",
            role: "负责人",
            period: "2023-2025",
            source: "国家重点研发计划(青年项目)",
            type: "nrdp"
        },
        {
            id: 'PR2023-001',
            title: "大规模时空数据相关性可视分析关键技术研究",
            role: "项目负责人",
            period: "2021-2023",
            source: "北京市自然科学基金面上项目",
            type: "local"
        }
    ],
    older: [
        {
            id: 'PR2020-001',
            title: "科技智库人才系统(一期、二期）",
            role: "项目负责人",
            period: "2020-2023",
            source: "中国科学院学部工作局",
            type: "cas"
        },
        {
            id: 'PR2020-002',
            title: "基于知识图谱的科技合作智能化管理服务平台",
            role: "项目负责人、参与人",
            period: "2020-2023",
            source: "中国科学院委托及STS项目（一期结题，二期启动）",
            type: "cas"
        },
        {
            id: 'PR2019-001',
            title: "面向领域大数据的知识图谱构建",
            role: "执行负责人",
            period: "2019-2023",
            source: "国家自然科学基金重点项目",
            type: "nsfc"
        },
        {
            id: 'PR2018-001',
            title: "食源性疾病监测、溯源与预警技术研究",
            role: "课题负责人",
            period: "2018-2021",
            source: "国家重点研发计划",
            type: "nrdp"
        }
    ]
};

// ============================================
// 大数据系统与平台 - Big Data Systems
// ============================================
const systemsData = [
    {
        id: 'SYS001',
        title: "国家基础学科公共数据中心信息科学分中心",
        period: "2023年10月-至今",
        description: "国家基础学科公共科学数据中心信息科学分中心致力于为自然科学和信息科学领域的科研人员提供与人工智能相关的标准数据集和特色数据集，以及算法和模型资源。",
        tech: "大数据、知识图谱、大语言模型",
        image: "img/infosdc-small.png",
        fullImage: "img/infosdc.png",
        url: "http://www.infosdc.cn/"
    },
    {
        id: 'SYS002',
        title: "中国科学院学部工作局科技智库人才系统",
        period: "2020年10月-2023年3月",
        description: "为中国科学院学部工作局提供智库人才数据治理与服务。",
        tech: "大数据、数据治理、知识图谱",
        image: "img/proj_dkg_academician_small.png",
        fullImage: "img/proj_dkg_academician.png",
        url: "http://10.0.88.46:8085/i/i"
    },
    {
        id: 'SYS003',
        title: "中国科学院国际合作局国际合作数据汇交和分析平台",
        period: "2019年10月-",
        description: "为实现中国科学院国际合作局的智能化，对国际合作相关数据进行治理，构建国际合作领域知识图谱，并提供智能化服务。",
        tech: "大数据、数据治理、知识图谱",
        image: "img/proj_dkg_international_small.png",
        fullImage: "img/proj_dkg_international.png",
        url: "http://10.0.90.42/"
    },
    {
        id: 'SYS004',
        title: "中国科学院科技合作智能化管理服务平台",
        period: "2019年8月-2020年6月",
        description: "为中国科学院科技发展促进局构建科技合作智能化管理服务平台，引入院地合作成效、专利成果转移转化等数据。",
        tech: "大数据、图数据库、知识图谱",
        image: "img/proj_sts_small.png",
        fullImage: "img/proj_sts.png",
        url: "http://10.0.88.36/home.html#/sts/"
    },
    {
        id: 'SYS005',
        title: "国家自然科学基金知识大数据管理服务平台",
        period: "2017年至2018年一期,2019年-2023年二期",
        description: "从国家自然科学基金委长期积累的相关数据出发，构建大数据管理平台，实现多维、网络分析与挖掘功能。",
        tech: "Hadoop, Ambari, Neo4J, GraphX, Apache Nifi, Apache Kylin",
        image: "img/proj_nsfcbigdata_small.png",
        fullImage: "screenshot/proj_nsfcbigdata_demo1.png",
        url: "http://kd.nsfc.gov.cn"
    }
];

// ============================================
// 搜索和过滤功能
// ============================================

class PaperFilter {
    constructor() {
        this.activeFilters = {
            direction: 'all',
            type: 'all',
            year: 'all',
            searchTerm: ''
        };
    }

    applyFilters(papers) {
        return papers.filter(paper => {
            // 方向过滤
            if (this.activeFilters.direction !== 'all') {
                if (this.activeFilters.direction === 'others') {
                    if (!(paper.direction === 'others' || paper.direction === 'dataset')) {
                        return false;
                    }
                } else {
                    if (paper.direction !== this.activeFilters.direction) {
                        return false;
                    }
                }
            }

            // 类型过滤
            if (this.activeFilters.type !== 'all' && paper.type !== this.activeFilters.type) {
                return false;
            }

            // 年份过滤
            if (this.activeFilters.year !== 'all') {
                const yearRange = this.activeFilters.year.split('-');
                if (yearRange.length === 2) {
                    const min = parseInt(yearRange[0]);
                    const max = parseInt(yearRange[1]);
                    if (paper.sort_year < min || paper.sort_year > max) {
                        return false;
                    }
                }
            }

            // 搜索词过滤
            if (this.activeFilters.searchTerm) {
                const term = this.activeFilters.searchTerm.toLowerCase();
                return paper.title.toLowerCase().includes(term) ||
                    paper.authors.toLowerCase().includes(term);
            }

            return true;
        });
    }

    setFilter(key, value) {
        this.activeFilters[key] = value;
    }

    getActiveFilters() {
        return this.activeFilters;
    }
}

class PatentFilter {
    constructor() {
        this.activeFilters = {
            status: 'all',
            type: 'all'
        };
    }

    applyFilters(patents) {
        return patents.filter(patent => {
            if (this.activeFilters.status !== 'all' && patent.status !== this.activeFilters.status) {
                return false;
            }
            if (this.activeFilters.type !== 'all' && patent.type !== this.activeFilters.type) {
                return false;
            }
            return true;
        });
    }

    setFilter(key, value) {
        this.activeFilters[key] = value;
    }
}

// 初始化过滤器
const paperFilter = new PaperFilter();
const patentFilter = new PatentFilter();

// ============================================
// 渲染函数
// ============================================



function renderPapers(papers, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // 检查是否处于折叠状态
    const papersContainer = document.getElementById('papersContainer');
    const isCollapsed = papersContainer && papersContainer.classList.contains('papers-collapsed');

    // 根据折叠状态决定显示多少个论文
    // 之前折叠显示 15 条，现在改为 10 条
    const displayCount = isCollapsed ? 10 : papers.length;

    container.innerHTML = papers.map((paper, index) => {
        // 超过显示数量的论文添加display:none
        const hideStyle = index >= displayCount ? 'style="display: none;"' : '';

        return `
        <div class="paper-item" data-id="${paper.id}" ${hideStyle}>
            <div class="paper-authors">${highlightAuthor(paper.authors)}</div>
            <div class="paper-title">
                ${paper.url ? `<a href="${paper.url}" target="_blank">${paper.title}</a>` : paper.title}
            </div>
            <div class="paper-meta">
                ${paper.journal || paper.venue}, ${paper.year}. ${paper.meta}
            </div>
            <div style="margin-bottom: 10px;">
                <span class="tag research-area">${getDirectionLabel(paper.direction)}</span>
                <span class="tag paper-type">${paper.type === 'journal' ? '期刊论文' : '会议论文'}</span>
                <span class="tag year">${paper.year}</span>
            </div>
        </div>
    `;
    }).join('');
}

function renderPatents(patents, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = patents.map((patent, index) => {
        const hidden = index >= 10 ? 'style="display: none;"' : '';
        return `
        <div class="patent-item" data-id="${patent.id}" ${hidden}>
            <div class="patent-title">${patent.title}</div>
            <div class="patent-meta">
                完成人：${patent.inventors}<br>
                申请号：${patent.number}<br>
                状态：${getPatentStatusLabel(patent.status)} | 类型：${getPatentTypeLabel(patent.type)} | 年份：${patent.year}
            </div>
        </div>
    `;
    }).join('');
}

// ============================================
// 辅助函数
// ============================================

function highlightAuthor(authors) {
    // 将 "Yi Du*" 或 "杜一*" 高亮显示
    return authors
        .replace(/Yi Du\*/g, '<strong style="color: var(--accent-color);">Yi Du*</strong>')
        .replace(/杜一\*/g, '<strong style="color: var(--accent-color);">杜一*</strong>')
        .replace(/Yi Du(?![a-z])/g, '<strong style="color: var(--accent-color);">Yi Du</strong>')
        .replace(/（共同指导）/g, '<span style="color: var(--accent-color);">（共同指导）</span>');
}

function getDirectionLabel(dir) {
    const labels = {
        'ai-for-science': 'AI for Science',
        'knowledge-graph': '科技大数据知识图谱',
        'dataset': '其他主题',
        'others': '其他主题'
    };
    return labels[dir] || dir;
}

function getPatentStatusLabel(status) {
    const labels = {
        'authorized': '已授权',
        'exam': '实审中',
        'applied': '申请中'
    };
    return labels[status] || status;
}

function getPatentTypeLabel(type) {
    const labels = {
        'china': '中国发明专利',
        'pct': 'PCT专利'
    };
    return labels[type] || type;
}

// ============================================
// 页面初始化
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // 初始化论文显示
    const allJournalPapers = [...papersData.journal];
    const allConferencePapers = [...papersData.conference];

    renderPapers(allJournalPapers, 'journalPapers');
    renderPapers(allConferencePapers, 'conferencePapers');

    // 初始化论文列表为折叠状态（只显示前5篇）
    const papersContainer = document.getElementById('papersContainer');
    if (papersContainer) {
        papersContainer.classList.add('papers-collapsed');
    }

    // 初始化专利显示
    renderPatents(patentsData, 'patentsContainer');

    // 初始化系统和平台
    renderSystems(systemsData);

    // 初始化科研项目
    renderProjects(projectsData.recent, 'recentProjects');
    renderOlderProjects(projectsData.older, 'olderProjects');

    // 初始化其他信息
    renderStandards();
    renderStudents();
    renderSocialPositions();
    renderBookChapters();

    // 添加搜索功能监听
    const paperSearchInput = document.getElementById('paperSearch');
    if (paperSearchInput) {
        paperSearchInput.addEventListener('input', function (e) {
            paperFilter.setFilter('searchTerm', e.target.value);
            const filtered = paperFilter.applyFilters([...papersData.journal, ...papersData.conference]);
            const journalFiltered = filtered.filter(p => p.type === 'journal');
            const conferenceFiltered = filtered.filter(p => p.type === 'conference');
            renderPapers(journalFiltered, 'journalPapers');
            renderPapers(conferenceFiltered, 'conferencePapers');
        });
    }
});

function renderSystems(systems) {
    const container = document.querySelector('.project-grid');
    if (!container) return;

    container.innerHTML = systems.map(sys => `
        <div class="project-card">
            <img src="${sys.image || 'placeholder.png'}" alt="${sys.title}" class="project-image">
            <div class="project-content">
                <h5 class="project-title">${sys.title}</h5>
                <p class="project-desc">${sys.description}</p>
                <div class="project-tech"><strong>技术:</strong> ${sys.tech}</div>
                <div>
                    <a href="${sys.url}" target="_blank" class="btn btn-sm btn-primary">访问</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(proj => `
        <div class="item-card">
            <h6 style="color: var(--primary-color); margin-bottom: 8px;">${proj.title}</h6>
            <p style="color: var(--text-light); font-size: 13px; margin: 5px 0;">
                <strong>角色:</strong> ${proj.role} | <strong>周期:</strong> ${proj.period}
            </p>
            ${proj.source ? `<p style="color: var(--text-light); font-size: 13px; margin: 5px 0;"><strong>来源:</strong> ${proj.source}</p>` : ''}
        </div>
    `).join('');
}

function renderOlderProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(proj => `
        <div class="item-card">
            <h6 style="color: var(--primary-color); margin-bottom: 8px;">${proj.title}</h6>
            <p style="color: var(--text-light); font-size: 13px; margin: 5px 0;">
                <strong>角色:</strong> ${proj.role} | <strong>周期:</strong> ${proj.period}
            </p>
            ${proj.source ? `<p style="color: var(--text-light); font-size: 13px; margin: 5px 0;"><strong>来源:</strong> ${proj.source}</p>` : ''}
        </div>
    `).join('');
}

function renderStandards() {
    const container = document.getElementById('standardsList');
    if (!container) return;

    const standards = [
        { title: "自动化系统与集成 离散制造企业数据空间集成模型", meta: "国家标准 GB/T 44063-2024, 2024.05", url: "https://www.cssn.net.cn/cssn/productDetail/20ce00ab7f210a174da47d7fed76e94f" },
        { title: "IEEE Recommended Practice for the Application of Knowledge Graphs for Talent Services", meta: "IEEE标准 3154-2024, 2024" },
        { title: "面向行业的大规模预训练模型技术和应用评估方法 第九部分：招聘大模型", meta: "团体标准 AIIA/PG 0113, 2023" },
        { title: "Guide for Scientific Knowledge Graphs", meta: "IEEE标准 P2807.4, 2021" },
        { title: "工业互联网平台 工业知识图谱构建技术要求", meta: "团体标准 T/CCSA 277-2019, 2019.12" }
    ];

    container.innerHTML = standards.map(std => `
        <p style="margin-bottom: 10px;">
            ${std.url ? `<a href="${std.url}" target="_blank" style="color: var(--accent-color);">${std.title}</a>` : std.title}<br>
            <span style="color: var(--text-light); font-size: 13px;">${std.meta}</span>
        </p>
    `).join('');
}

function renderStudents() {
    const container = document.getElementById('studentsList');
    if (!container) return;

    const students = [
        { name: "马雨捷", level: "硕士", note: "国家奖学金" },
        { name: "崔强", level: "硕士", note: "" },
        { name: "陈雪青", level: "硕士（转博）", note: "国家奖学金" },
        { name: "黄梦依", level: "硕士", note: "毕业去向：小红书(北京)" },
        { name: "宁致远(共同指导)", level: "博士", note: "毕业去向：西湖大学(博后)" },
        { name: "叶旭", level: "硕士", note: "毕业去向：京东(北京)" },
        { name: "肖濛(共同指导)", level: "博士", note: "中科院院长特别奖，毕业去向：中科院计算机所(博后)" },
        { name: "张鹏", level: "硕士", note: "毕业去向：美团(上海)" },
        { name: "王寒雪", level: "硕士", note: "毕业去向：工行软开(北京)" },
        { name: "乔子越(共同指导)", level: "博士", note: "国家奖学金，院长奖学金，毕业去向：港科大(广州)博士后,大湾区大学助理教授" }
    ];

    container.innerHTML = students.map((stu, index) => {
        const hidden = index >= 6 ? 'style="display: none;"' : '';
        return `
        <p ${hidden} style="margin-bottom: 10px; color: var(--text-dark); font-size: 14px;">
            <strong>${stu.name}</strong>（${stu.level}）<br>
            ${stu.note ? `<span style="color: var(--text-light); font-size: 13px;">${stu.note}</span>` : ''}
        </p>
    `;
    }).join('');
}

function renderSocialPositions() {
    const container = document.getElementById('socialPositions');
    if (!container) return;

    const positions = [
        { title: "北京市数据标准化技术委员会 委员", period: "(2025-2029)" },
        { title: "AI for Science 青年编委", org: "", period: "(2025-)" },
        { title: "Scientific Data 编委", period: "(Editorial Board Member)" },
        { title: "IEEE Transactions on Industrial Cyber-Physical Systems 副编辑", period: "(Associate Editor)" },
        { title: "IEEE/ASME Transactions on Mechatronics 技术编辑", period: "(2024.10-2027.10)" },
        { title: "Neurocomputing 副编辑", period: "(Associate Editor)" },
        { title: "中国科学院青年创新促进会 理事", period: "(第七届理事会2024-2025)" },
        { title: "中国计算机学会(CCF)大数据专家委员会 执行委员", period: "" },
        { title: "中国计算机学会(CCF) 高级会员", period: "" },
        { title: "ACM 会员", period: "" }
    ];

    container.innerHTML = positions.map(pos => `
        <p style="margin-bottom: 8px; color: var(--text-dark); font-size: 14px;">
            <strong>${pos.title}</strong> <span style="color: var(--text-light);">${pos.period}</span>
        </p>
    `).join('');
}

function renderBookChapters() {
    const container = document.getElementById('bookChapters');
    if (!container) return;

    const chapters = [
        { title: "人工智能关键技术与应用实践", authors: "中国科学院计算机网络信息中心组编,孙德刚等编著", chapter: "第4章", publisher: "科学出版社", year: "2025" },
        { title: "创新方法新系统", authors: "周园春,吴俊杰,钱力,杜一,刘冠男", publisher: "科学出版社", year: "2022" },
        { title: "网络数据可视化与分析利器:Gephi中文教程", authors: "刘勇,杜一", publisher: "电子工业出版社", year: "2017" },
        { title: "笔式用户界面 (第二版)", chapter: "第6章、第7章", authors: "戴国忠,田丰", publisher: "中国科技大学出版社", year: "2014" }
    ];

    container.innerHTML = chapters.map(ch => `
        <p style="margin-bottom: 10px; color: var(--text-dark); font-size: 14px;">
            <strong>${ch.title}</strong>${ch.chapter ? `（${ch.chapter}）` : ''}<br>
            <span style="color: var(--text-light); font-size: 13px;">${ch.authors}, ${ch.publisher}, ${ch.year}</span>
        </p>
    `).join('');
}

// ============================================
// 导出供全局使用
// ============================================

window.filterPapers = function (value, filterType) {
    paperFilter.setFilter(filterType, value);
    const filtered = paperFilter.applyFilters([...papersData.journal, ...papersData.conference]);

    const journalFiltered = filtered.filter(p => p.type === 'journal');
    const conferenceFiltered = filtered.filter(p => p.type === 'conference');

    renderPapers(journalFiltered, 'journalPapers');
    renderPapers(conferenceFiltered, 'conferencePapers');

    // 更新按钮状态
    updatePaperFilterButtons(filterType, value);
};

window.filterPatents = function (value, filterType) {
    patentFilter.setFilter(filterType, value);
    const filtered = patentFilter.applyFilters(patentsData);
    renderPatents(filtered, 'patentsContainer');
    updatePatentFilterButtons(filterType, value);
};

window.toggleAllPapers = function () {
    const btn = document.getElementById('papersToggleBtn');
    const papersContainer = document.getElementById('papersContainer');

    if (!btn || !papersContainer) return;

    // 切换显示状态
    const isHidden = papersContainer.classList.contains('papers-collapsed');

    if (isHidden) {
        // 展开所有论文
        papersContainer.classList.remove('papers-collapsed');
        btn.innerHTML = '<i class="fas fa-chevron-up"></i> 显示摘要';
    } else {
        // 收起到只显示前5篇
        papersContainer.classList.add('papers-collapsed');
        btn.innerHTML = '<i class="fas fa-chevron-down"></i> 显示所有论文';
    }
};

// 保持向后兼容
window.toggleClassicPapers = window.toggleAllPapers;

window.toggleOlderPatents = function (evt) {
    // 首先尝试通过id找到按钮
    let btn = document.getElementById('patentsToggleBtn');

    // 如果id找不到，尝试通过事件对象找
    if (!btn && evt && evt.target) {
        btn = evt.target.closest('.collapse-toggle');
    }

    const patentsContainer = document.getElementById('patentsContainer');

    if (!patentsContainer || !btn) {
        console.warn('Cannot find patents container or button');
        return;
    }

    // 检查是否有隐藏的专利
    const items = patentsContainer.querySelectorAll('.patent-item');
    const isHidden = items.length > 10 && items[10].style.display === 'none';

    if (isHidden) {
        // 显示隐藏的专利
        for (let i = 10; i < items.length; i++) {
            items[i].style.display = '';
        }
        btn.innerHTML = '<i class="fas fa-chevron-up"></i> 显示较少';
    } else {
        // 隐藏超过10个的专利
        for (let i = 10; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        btn.innerHTML = '<i class="fas fa-chevron-down"></i> 显示更多专利';
    }
};

window.toggleOlderProjects = function (evt) {
    // 首先尝试通过id找到按钮
    let btn = document.getElementById('projectsToggleBtn');

    // 如果id找不到，尝试通过事件对象找
    if (!btn && evt && evt.target) {
        btn = evt.target.closest('.collapse-toggle');
    }

    const elem = document.getElementById('olderProjects');

    if (!elem) {
        console.warn('Cannot find olderProjects element');
        return;
    }

    if (elem.classList.contains('show')) {
        elem.classList.remove('show');
        if (btn) btn.innerHTML = '<i class="fas fa-chevron-down"></i> 显示历史项目';
    } else {
        elem.classList.add('show');
        if (btn) btn.innerHTML = '<i class="fas fa-chevron-up"></i> 隐藏历史项目';
    }
};

window.toggleMoreStudents = function (evt) {
    // 首先尝试通过id找到按钮
    let btn = document.getElementById('studentsToggleBtn');

    // 如果id找不到，尝试通过事件对象找
    if (!btn && evt && evt.target) {
        btn = evt.target.closest('.collapse-toggle');
    }

    const studentsList = document.getElementById('studentsList');

    if (!studentsList || !btn) {
        console.warn('Cannot find studentsList or button');
        return;
    }

    // 获取所有学生项
    const items = studentsList.querySelectorAll('p');
    const isHidden = items.length > 6 && items[6].style.display === 'none';

    if (isHidden) {
        // 显示隐藏的学生
        for (let i = 6; i < items.length; i++) {
            items[i].style.display = '';
        }
        btn.innerHTML = '<i class="fas fa-chevron-up"></i> 隐藏';
    } else {
        // 隐藏超过6个的学生
        for (let i = 6; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        btn.innerHTML = '<i class="fas fa-chevron-down"></i> 显示更多';
    }
};

// 更新论文过滤按钮状态
function updatePaperFilterButtons(filterType, value) {
    const papersSection = document.getElementById('papers');
    if (!papersSection) return;

    const labels = papersSection.querySelectorAll('.filter-bar label');
    labels.forEach(label => {
        let isTargetGroup = false;

        if (filterType === 'direction' && label.textContent.includes('按研究方向筛选')) {
            isTargetGroup = true;
        } else if (filterType === 'type' && label.textContent.includes('按论文类型筛选')) {
            isTargetGroup = true;
        } else if (filterType === 'year' && label.textContent.includes('按年份筛选')) {
            isTargetGroup = true;
        }

        if (isTargetGroup) {
            const buttonGroup = label.nextElementSibling;
            if (buttonGroup && buttonGroup.classList.contains('btn-group')) {
                const buttons = buttonGroup.querySelectorAll('.filter-btn');
                buttons.forEach(btn => {
                    btn.classList.remove('active');

                    // 规范化按钮文本，兼容换行和多余空格
                    const btnText = btn.textContent.replace(/\s+/g, ' ').trim();

                    // 判断按钮是否匹配当前选择
                    let isMatch = false;
                    if (filterType === 'direction') {
                        if (value === 'all' && btnText === '全部') isMatch = true;
                        if (value === 'ai-for-science' && btnText.includes('AI for Science')) isMatch = true;
                        if (value === 'knowledge-graph' && btnText.includes('科技大数据知识图谱')) isMatch = true;
                        if ((value === 'others' || value === 'dataset') && btnText.includes('其他主题')) isMatch = true;
                    } else if (filterType === 'type') {
                        if (value === 'all' && btn.textContent === '全部') isMatch = true;
                        if (value === 'journal' && btn.textContent.includes('期刊')) isMatch = true;
                        if (value === 'conference' && btn.textContent.includes('会议')) isMatch = true;
                    } else if (filterType === 'year') {
                        if (value === 'all' && btn.textContent === '全部') isMatch = true;
                        if (btn.textContent === value) isMatch = true;
                    }

                    if (isMatch) {
                        btn.classList.add('active');
                    }
                });
            }
        }
    });
}

// 更新专利过滤按钮状态
function updatePatentFilterButtons(filterType, value) {
    const patentsSection = document.getElementById('patents');
    if (!patentsSection) return;

    const labels = patentsSection.querySelectorAll('.filter-bar label');
    labels.forEach(label => {
        let isTargetGroup = false;

        if (filterType === 'status' && label.textContent.includes('按授权状态筛选')) {
            isTargetGroup = true;
        } else if (filterType === 'type' && label.textContent.includes('按专利类型筛选')) {
            isTargetGroup = true;
        }

        if (isTargetGroup) {
            const buttonGroup = label.nextElementSibling;
            if (buttonGroup && buttonGroup.classList.contains('btn-group')) {
                const buttons = buttonGroup.querySelectorAll('.filter-btn');
                buttons.forEach(btn => {
                    btn.classList.remove('active');

                    // 判断按钮是否匹配当前选择
                    let isMatch = false;
                    if (filterType === 'status') {
                        if (value === 'all' && btn.textContent === '全部') isMatch = true;
                        if (value === 'authorized' && btn.textContent.includes('已授权')) isMatch = true;
                        if (value === 'exam' && btn.textContent.includes('实审')) isMatch = true;
                        if (value === 'applied' && btn.textContent.includes('申请')) isMatch = true;
                    } else if (filterType === 'type') {
                        if (value === 'all' && btn.textContent === '全部') isMatch = true;
                        if (value === 'china' && btn.textContent.includes('中国')) isMatch = true;
                        if (value === 'pct' && btn.textContent.includes('PCT')) isMatch = true;
                    }

                    if (isMatch) {
                        btn.classList.add('active');
                    }
                });
            }
        }
    });
}
