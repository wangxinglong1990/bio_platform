// 中文翻译
export const zhTranslation = {
  "app": {
    "title": "生物信息学平台",
    "nav": {
      "home": "首页",
      "protein": "蛋白质功能",
      "gene": "基因功能",
      "training": "我的训练任务",
      "about": "关于",
      "faq": "常见问题",
      "api": "API"
    }
  },
  "home": {
    "banner": {
      "description": "利用先进的深度学习算法，为蛋白质和基因序列提供精准预测和专业训练服务，助力科研与工业应用",
      "start": "开始使用",
      "learnMore": "了解更多"
    },
    "advantages": {
      "title": "平台优势",
      "description": "先进算法与丰富数据的完美结合，为您提供精准可靠的生物信息学服务",
      "accuracy": {
        "title": "高精度预测",
        "description": "基于大规模实验数据训练的深度学习模型，提供业界领先的预测精度"
      },
      "speed": {
        "title": "快速响应",
        "description": "优化的计算架构，秒级响应您的预测请求，无需漫长等待"
      },
      "customization": {
        "title": "定制训练",
        "description": "支持用户使用自有数据训练专属模型，满足特定研究领域需求"
      }
    },
    "combined": {
      "title": "预测与训练相结合",
      "description": "我们打造了一个完整的生物信息学平台，不仅提供高精度的预测功能，还能帮助您训练定制化模型。",
      "points": {
        "predict": "直接使用我们训练好的模型进行预测",
        "upload": "上传自己的数据训练专属模型",
        "manage": "管理和追踪您的训练任务",
        "download": "下载训练好的模型用于本地部署"
      },
      "button": "查看我的训练任务"
    },
    "cta": {
      "title": "准备好开始使用了吗？",
      "description": "探索我们全面的蛋白质和基因功能，助力您的科研和工业应用",
      "button": "立即开始"
    },
    "protein": {
      "title": "蛋白质功能",
      "kcat": {
        "title": "Kcat",
        "description": "酶促反应的催化常数，反映酶的活性和效率"
      },
      "km": {
        "title": "Km",
        "description": "米氏常数，表示酶与底物的亲和力"
      },
      "tm": {
        "title": "Tm",
        "description": "蛋白质的热稳定性，表示蛋白质变性的温度"
      },
      "solubility": {
        "title": "蛋白质溶解度",
        "description": "蛋白质在溶液中的溶解能力"
      }
    },
    "gene": {
      "title": "基因功能",
      "promoter": {
        "title": "启动子强度",
        "description": "基因表达的启动区域活性强度预测"
      },
      "rbs": {
        "title": "RBS翻译起始率",
        "description": "核糖体结合位点的翻译效率预测"
      }
    }
  },
  "features": {
    "predict": "预测",
    "train": "训练",
    "developing": {
      "title": "功能开发中",
      "description": "该功能正在积极开发中，敬请期待！",
      "return": "返回首页"
    },
    "kcat": {
      "title": "Kcat预测",
      "titleEn": "Kcat Prediction",
      "description": "使用我们训练好的深度学习模型，精准预测酶-底物对的催化常数",
      "train": {
        "title": "Kcat训练",
        "titleEn": "Kcat Training",
        "description": "上传您的专有数据，训练定制化Kcat预测模型"
      },
      "titleSuffix": "催化常数",
      "descriptionFull": "催化常数(k<sub>cat</sub>)是酶促反应动力学中的基本参数，定义了在底物饱和条件下(S≫K<sub>m</sub>)，每个酶活性中心单位时间内完成的反应周转数。",
      "formula": {
        "title": "米氏方程中的k<sub>cat</sub>",
        "explanation": "其中，v为反应速率，V<sub>max</sub>为最大反应速率，[S]为底物浓度，K<sub>m</sub>为米氏常数，[E]<sub>0</sub>为酶的总浓度"
      },
      "keyPoints": {
        "unit": "单位为s<sup>-1</sup>（每秒），范围通常从10<sup>-2</sup>到10<sup>7</sup>s<sup>-1</sup>不等",
        "measure": "反映酶催化效率的基本量度，受活性位点结构和底物特性影响",
        "specificity": "与K<sub>m</sub>共同决定酶的专一性常数(k<sub>cat</sub>/K<sub>m</sub>)，反映酶对底物的催化效率"
      },
      "scienceApplication": {
        "title": "酶工程与代谢工程领域的关键参数",
        "points": {
          "industrial": "工业酶催化剂开发与优化",
          "metabolic": "代谢工程中流量控制点分析",
          "evolution": "设计定向进化策略以提高催化效率",
          "biocatalysis": "生物催化与生物转化工艺优化"
        }
      },
      "molecularInfo": {
        "title": "催化常数的生物物理学意义",
        "step": "在酶促反应的转换过程中，k<sub>cat</sub>对应于从酶-底物复合物(ES)到产物形成的速率限制步骤(rate-limiting step)。根据过渡态理论，k<sub>cat</sub>可表示为：",
        "formula": "其中k<sub>B</sub>为玻尔兹曼常数，T为绝对温度，h为普朗克常数，ΔG<sup>‡</sup>为活化自由能，R为气体常数",
        "factors": "催化常数受多种因素影响，包括酶的构象变化、底物结合位点的几何构型、活性位点残基的化学性质、以及酶-底物相互作用网络等。通过深度学习方法整合这些复杂信息，可以实现对k<sub>cat</sub>的准确预测。"
      },
      "modelPerformance": {
        "accuracy": "我们的Kcat预测模型基于卷积神经网络和注意力机制，在多酶家族测试集上达到了0.85的R²值和0.42的RMSE值，尤其在水解酶和转移酶家族表现卓越。",
        "trainingData": "建议提供至少100个酶-底物对的实验数据，包含酶的氨基酸序列和底物的SMILES格式分子结构，以及实验测定的k<sub>cat</sub>值。实验条件如pH、温度等也可作为辅助特征。",
        "output": "预测Kcat值(s<sup>-1</sup>)、对数标度下的95%置信区间、模型置信度评分，以及关键残基贡献分析和酶-底物相互作用热图，帮助了解催化机制。"
      }
    },
    "km": {
      "title": "Km预测",
      "titleEn": "Km Prediction",
      "description": "使用我们训练好的深度学习模型，精准预测酶-底物对的米氏常数",
      "train": {
        "title": "Km训练",
        "titleEn": "Km Training",
        "description": "上传您的专有数据，训练定制化Km预测模型"
      },
      "titleSuffix": "米氏常数",
      "descriptionFull": "米氏常数(K<sub>m</sub>)是酶促反应动力学中的基本参数，定义为酶反应速率达到其最大值一半时的底物浓度，反映了酶与底物的亲和力。",
      "formula": {
        "title": "米氏方程中的K<sub>m</sub>",
        "explanation": "式中，v为反应速率，V<sub>max</sub>为最大反应速率，[S]为底物浓度，K<sub>m</sub>为米氏常数"
      },
      "keyPoints": {
        "unit": "单位通常为μM或mM，数值越小表示酶与底物亲和力越强",
        "significance": "反映酶与底物结合的亲和力，是衡量酶催化效率的重要参数",
        "factors": "受活性位点结构、底物特性以及pH、温度等环境因素影响",
        "affinity": "亲和力指标，直接反映酶与底物结合的强度",
        "specificity": "与k<sub>cat</sub>共同决定酶的专一性常数(k<sub>cat</sub>/K<sub>m</sub>)，表征酶对特定底物的催化效率"
      },
      "scienceApplication": {
        "title": "酶工程与药物研发领域的关键参数",
        "points": {
          "engineering": "酶催化剂优化与筛选",
          "drugs": "药物代谢动力学研究",
          "catalysis": "生物催化反应条件优化",
          "structure": "酶结构功能关系探究",
          "modeling": "酶-底物相互作用建模与预测",
          "drug": "药物设计与靶向优化",
          "comparison": "不同底物与酶系统的比较分析",
          "optimization": "工业酶制剂的性能优化"
        }
      },
      "molecularInfo": {
        "title": "米氏常数的生物物理学意义",
        "step": "在酶促反应过程中，K<sub>m</sub>反映了酶-底物复合物(ES)的解离常数，是理解酶催化机制的关键参数。",
        "factors": "米氏常数受多种因素影响，包括酶的构象、底物与活性位点的结合方式、周围环境等。通过深度学习方法整合这些复杂信息，可以实现对K<sub>m</sub>的准确预测。",
        "conclusion": "精确预测K<sub>m</sub>值有助于理解酶与底物相互作用机制，指导酶的定向进化与优化设计。"
      },
      "modelPerformance": {
        "accuracy": "我们的Km预测模型基于深度学习算法，在多酶家族测试集上达到了0.82的R²值和0.45的RMSE值，特别在水解酶和转移酶家族表现优异。",
        "trainingData": "建议提供至少100个酶-底物对的实验数据，包含酶的氨基酸序列、底物的SMILES格式分子结构，以及实验测定的K<sub>m</sub>值。",
        "output": "预测Km值(μM或mM)、对数标度下的95%置信区间、模型置信度评分，以及酶-底物结合位点分析。"
      }
    },
    "tm": {
      "title": "Tm预测",
      "titleEn": "Tm Prediction",
      "description": "使用我们训练好的深度学习模型，精准预测蛋白质的热稳定性",
      "train": {
        "title": "Tm训练",
        "titleEn": "Tm Training",
        "description": "上传您的专有数据，训练定制化Tm预测模型"
      },
      "titleSuffix": "热稳定性",
      "descriptionFull": "熔点温度(T<sub>m</sub>)是表征蛋白质热稳定性的关键参数，定义为蛋白质在热变性过程中有50%处于解折叠状态的温度。",
      "formula": {
        "title": "蛋白质热变性平衡",
        "explanation": "式中，ΔG为解折叠自由能变化，ΔH为焓变，ΔS为熵变，T<sub>m</sub>为熔点温度"
      },
      "keyPoints": {
        "unit": "单位为°C或K，数值越高表示蛋白质热稳定性越好",
        "significance": "反映蛋白质的结构稳定性，是工业应用和药物开发的重要指标",
        "factors": "受蛋白质结构、氨基酸组成、二硫键以及pH、离子强度等环境因素影响"
      },
      "scienceApplication": {
        "title": "蛋白质工程与生物技术领域的关键参数",
        "points": {
          "engineering": "蛋白质工程与热稳定性优化",
          "drugs": "生物药物的稳定性研究",
          "catalysis": "热稳定酶的开发与应用",
          "structure": "蛋白质结构稳定性分析"
        }
      },
      "molecularInfo": {
        "title": "蛋白质热稳定性的分子基础",
        "step": "蛋白质的热稳定性受多种分子相互作用影响，包括氢键、疏水相互作用、盐桥和二硫键等。",
        "factors": {
          "hydrophobic": "疏水核心",
          "hydrogen": "氢键网络",
          "saltBridge": "盐桥相互作用",
          "disulfide": "二硫键",
          "surface": "表面电荷分布",
          "loops": "柔性环区结构",
          "hydrophobicDesc": "紧密的疏水核心有助于提高蛋白质的热稳定性",
          "hydrogenDesc": "广泛的氢键网络增强蛋白质结构的稳定性",
          "saltBridgeDesc": "盐桥相互作用在高温条件下对稳定性贡献显著",
          "disulfideDesc": "二硫键共价连接可显著提高热稳定性",
          "surfaceDesc": "优化的表面电荷分布减少静电排斥",
          "loopsDesc": "缩短柔性环区可减少熵驱动的解折叠"
        },
        "conclusion": "通过深度学习方法整合这些复杂特征，可以准确预测蛋白质的Tm值，指导热稳定性优化设计。"
      },
      "modelPerformance": {
        "accuracy": "我们的Tm预测模型基于深度学习算法，在多种蛋白质家族测试集上达到了0.85的R²值和3.2°C的平均绝对误差，具有较高的预测准确性。",
        "trainingData": "建议提供至少50个蛋白质的实验数据，包含蛋白质的氨基酸序列和实验测定的Tm值。可选提供pH、缓冲液等实验条件信息。",
        "output": "预测Tm值(°C)、95%置信区间、模型置信度评分，以及影响热稳定性的关键残基分析。"
      }
    },
    "solubility": {
      "title": "蛋白质溶解度预测",
      "titleEn": "Solubility Prediction",
      "description": "使用我们训练好的深度学习模型，精准预测蛋白质的溶解性能",
      "train": {
        "title": "溶解度训练",
        "titleEn": "Solubility Training",
        "description": "上传您的专有数据，训练定制化溶解度预测模型"
      },
      "titleOnly": "蛋白质溶解度",
      "descriptionFull": "蛋白质溶解度是指蛋白质在特定溶剂和环境条件下保持溶解状态的能力，对蛋白质表达、纯化和应用具有重要意义。",
      "formula": {
        "title": "溶解度热力学关系",
        "explanation": "其中，ln(S)为溶解度对数值，ΔG<sub>sol</sub>为溶解自由能，ΔH<sub>sol</sub>为溶解焓变，ΔS<sub>sol</sub>为溶解熵变，R为气体常数，T为绝对温度"
      },
      "keyPoints": {
        "determinants": "蛋白质溶解度主要受氨基酸组成、表面电荷分布、疏水性以及二级结构等因素影响",
        "impact": "溶解度影响蛋白质的表达产量、纯化效率、长期稳定性和生物活性",
        "conditions": "pH、温度、离子强度和添加剂等环境因素可显著调节蛋白质溶解度"
      },
      "scienceApplication": {
        "title": "蛋白质科学与生物制药的关键参数",
        "points": {
          "industrial": "工业酶制剂的开发与配方优化",
          "drug": "生物药物的制剂开发与储存稳定性",
          "antibody": "抗体药物的高浓度制剂研究",
          "circuit": "合成生物学蛋白质电路设计"
        }
      },
      "molecularInfo": {
        "title": "影响蛋白质溶解度的分子因素",
        "step": "蛋白质溶解过程涉及复杂的分子相互作用，包括蛋白质-溶剂和蛋白质-蛋白质相互作用，以下是主要影响因素：",
        "factors": {
          "charge": "表面电荷分布",
          "hydrophobic": "疏水性残基分布",
          "secondary": "二级结构特征",
          "disorder": "无序区域比例",
          "translation": "翻译速率影响",
          "chaperone": "分子伴侣辅助",
          "chargeDesc": "均匀分布的表面电荷有助于提高溶解度",
          "hydrophobicDesc": "暴露的疏水残基比例影响聚集倾向",
          "secondaryDesc": "二级结构比例影响折叠稳定性和溶解性",
          "disorderDesc": "较高的无序区域比例通常有利于溶解度",
          "translationDesc": "翻译速率影响折叠效率和溶解表达",
          "chaperoneDesc": "分子伴侣协助蛋白质正确折叠和溶解"
        },
        "conclusion": "通过深度学习方法整合这些因素，可以准确预测蛋白质的溶解特性，指导溶解度优化设计。"
      },
      "modelPerformance": {
        "accuracy": "我们的溶解度预测模型在大肠杆菌表达系统测试集上达到了0.82的AUC值和78%的分类准确率，能有效区分可溶性和不可溶性蛋白质。",
        "trainingData": "建议提供至少100个蛋白质的表达溶解度数据，包含蛋白质的氨基酸序列和实验验证的溶解性结果（可溶/不可溶或溶解度评分）。",
        "output": "预测溶解度评分(0-1)、95%置信区间、模型置信度评分，以及影响溶解度的关键因素分析。"
      }
    },
    "promoter": {
      "title": "启动子强度预测",
      "titleEn": "Promoter Strength Prediction",
      "description": "通过深度学习模型预测启动子的表达强度，帮助基因工程设计和优化。",
      "developingDescription": "我们正在积极开发启动子强度预测功能，该功能将帮助您预测和优化基因表达系统中的启动子性能。目前该功能仍处于开发阶段，请您耐心等待，我们将尽快推出该服务。",
      "sequencePlaceholder": "请输入启动子DNA序列 (ATCG)",
      "predictButton": "预测启动子强度",
      "resultTitle": "启动子强度预测结果",
      "error": {
        "missingInput": "请输入DNA序列或上传序列文件"
      },
      "toolDescription": "启动子强度预测工具可以预测给定DNA序列作为启动子的相对表达强度。",
      "applicableSequences": "适用序列",
      "applicableSequence": {
        "ecoli": "大肠杆菌启动子序列",
        "length": "长度应在50-200bp之间",
        "bases": "应仅包含ATCG碱基"
      },
      "resultInterpretation": "预测结果为相对表达强度值，范围通常在0-1之间，值越大表示启动子强度越高。",
      "introduction": {
        "title": "启动子功能简介",
        "content": "启动子是DNA上控制基因表达的关键调控序列，决定了RNA聚合酶与DNA的结合效率和转录起始的频率。启动子的强度直接影响蛋白质的产量，是合成生物学中精确调控基因表达的重要元件。"
      },
      "goal": {
        "title": "我们的开发目标",
        "content": "我们的目标是开发一个高精度的启动子强度预测工具，通过机器学习模型分析启动子序列特征，准确预测其在不同宿主细胞中的表达效率，帮助研究人员和工程师设计最适合其应用的启动子元件。"
      },
      "train": {
        "title": "启动子强度训练",
        "titleEn": "Promoter Strength Training",
        "description": "使用您自己的启动子序列和强度数据，训练定制化的启动子强度预测模型"
      }
    },
    "rbs": {
      "title": "RBS翻译起始率预测",
      "description": "使用深度学习模型预测核糖体结合位点的翻译效率",
      "train": {
        "title": "RBS翻译起始率训练",
        "description": "使用您自己的RBS序列和活性数据，训练定制化的RBS预测模型"
      },
      "developingDescription": "我们正在积极开发RBS翻译起始率预测功能，该功能将帮助您预测和优化基因表达系统中的核糖体结合位点性能。目前该功能仍处于开发阶段，请您耐心等待，我们将尽快推出该服务。",
      "introduction": {
        "title": "RBS功能简介",
        "content": "核糖体结合位点(RBS)是mRNA上控制翻译起始的关键序列，决定了核糖体与mRNA的结合效率。RBS的强度直接影响蛋白质的产量，是合成生物学中精确调控基因表达的另一个重要层次。"
      },
      "goal": {
        "title": "我们的开发目标",
        "content": "我们的目标是开发一个高精度的RBS翻译起始率预测工具，通过机器学习模型分析RBS序列特征和二级结构，准确预测其在不同宿主细胞中的翻译效率，帮助研究人员和工程师设计最适合其应用的RBS元件。"
      }
    }
  },
  "training": {
    "developing": {
      "title": "该功能正在开发中",
      "description": "我们目前正在升级和完善训练功能，暂时无法提供模型训练服务。请您耐心等待，我们将尽快恢复此功能。"
    },
    "pageTitle": "模型训练服务",
    "customTitle": "定制化模型训练",
    "customDescription": "欢迎使用我们的模型训练服务。通过此服务，您可以使用自己的数据来训练定制化的预测模型，以提高针对您特定研究领域的预测准确性。训练完成后，您可以下载模型或直接在我们的平台上使用。",
    "advantages": "优势",
    "advantagesList": {
      "ownData": "使用您自己的数据集进行训练",
      "customization": "根据特定需求定制化模型",
      "accuracy": "提高针对您研究领域的预测准确性",
      "download": "训练完成后可下载模型或直接在平台使用"
    },
    "availableServices": "可用的训练服务",
    "startTraining": "开始训练",
    "howToUse": "如何使用训练服务",
    "steps": {
      "selectModel": "选择您要训练的模型类型",
      "uploadData": "上传您的训练数据集（CSV或Excel格式）",
      "setParams": "设置训练参数",
      "submitJob": "提交训练任务",
      "waitCompletion": "等待训练完成（您可以随时查看训练进度）",
      "download": "下载训练好的模型或直接在平台上使用"
    },
    "note": "注意",
    "trainingTimeNote": "训练时间取决于数据集大小和选择的参数。大型数据集可能需要几小时完成训练。",
    "viewTasks": "查看我的训练任务",
    "viewTasksDescription": "您可以查看和管理您之前提交的所有训练任务，包括正在进行中和已完成的任务。",
    "viewMyTasks": "查看我的训练任务",
    "services": {
      "kcat": {
        "title": "Kcat预测模型训练",
        "description": "使用您自己的酶-底物数据，训练定制化的Kcat预测模型"
      },
      "km": {
        "title": "Km预测模型训练",
        "description": "使用您自己的酶-底物数据，训练定制化的Km预测模型"
      },
      "solubility": {
        "title": "蛋白质溶解度预测模型训练",
        "description": "使用您自己的蛋白质溶解度数据，训练定制化的溶解度预测模型"
      },
      "promoter": {
        "title": "启动子强度预测模型训练",
        "description": "使用您自己的启动子序列和强度数据，训练定制化的启动子强度预测模型"
      },
      "rbs": {
        "title": "RBS预测模型训练",
        "description": "使用您自己的RBS序列和活性数据，训练定制化的RBS预测模型"
      }
    },
    "jobs": {
      "title": "我的训练任务",
      "refresh": "刷新任务",
      "refreshing": "刷新中...",
      "loading": "加载任务列表...",
      "empty": "您还没有提交过训练任务",
      "fetchError": "获取训练任务失败",
      "fetchErrorMsg": "获取训练任务时发生错误",
      "refreshError": "刷新任务状态错误",
      "cancelError": "取消任务 {{jobId}} 失败",
      "cancelErrorMsg": "取消任务时发生错误",
      "downloadError": "下载模型时发生错误",
      "cancelledMessage": "任务已取消",
      "trainingFailed": "训练失败",
      "download": "下载",
      "cancel": "取消",
      "status": {
        "queued": "排队中",
        "running": "训练中",
        "completed": "已完成",
        "failed": "失败",
        "unknown": "未知"
      },
      "table": {
        "id": "ID",
        "type": "模型类型",
        "description": "描述",
        "status": "状态",
        "progress": "进度",
        "created": "创建时间",
        "updated": "更新时间",
        "actions": "操作"
      },
      "modelType": {
        "kcat": "Kcat预测",
        "km": "Km预测",
        "solubility": "溶解度预测",
        "promoter": "启动子强度",
        "rbs": "RBS预测"
      }
    },
    "form": {
      "uploadDataset": "上传训练数据集",
      "description": "训练任务描述 (可选)",
      "descriptionPlaceholder": "为您的训练任务添加描述，便于后续识别",
      "supportedFormats": "支持CSV或Excel格式。文件应包含蛋白质序列、底物SMILES以及对应的Kcat值。",
      "downloadTemplate": "下载模板文件",
      "advancedParams": "高级训练参数",
      "epochs": "训练轮次(Epochs)",
      "epochsRecommendation": "推荐值: 50-200。数值越大，训练时间越长。",
      "batchSize": "批量大小(Batch Size)",
      "batchSizeRecommendation": "推荐值: 16, 32, 64。通常较小的批量大小导致更好的泛化性能。",
      "learningRate": "学习率(Learning Rate)",
      "learningRateRecommendation": "推荐值: 0.001。影响模型收敛速度和稳定性。",
      "validationSplit": "验证集比例(Validation Split)",
      "validationSplitRecommendation": "推荐值: 0.2。数据集中用于验证的比例。",
      "submit": "提交训练任务",
      "submitSuccess": "训练任务提交成功!",
      "successMessage": "您的Kcat预测模型训练任务已成功提交。任务ID: {{jobId}}",
      "redirectMessage": "系统正在处理您的训练请求，您将在3秒后自动跳转到任务管理页面，您可以在那里查看训练进度。",
      "submitError": "提交训练任务失败",
      "submitErrorMsg": "提交训练任务时发生错误",
      "dataset": {
        "error": "请选择数据集文件"
      },
      "requirements": "数据集要求",
      "kcatDatasetRequirement": "训练Kcat预测模型需要准备包含以下列的数据集:",
      "kcatRequiredColumn": {
        "protein": "蛋白质氨基酸序列",
        "substrate": "底物分子的SMILES表示",
        "kcatValue": "实验测定的kcat值(s<sup>-1</sup>)"
      },
      "tip": "提示",
      "datasetSizeRecommendation": "建议数据集至少包含100个样本以获得较好的训练效果。",
      "process": "训练过程",
      "processDescription": "提交任务后，系统将:",
      "processStep": {
        "validation": "验证并预处理您的数据",
        "training": "训练深度学习模型",
        "evaluation": "评估模型性能",
        "modelGeneration": "生成可下载的训练模型"
      },
      "trainingTimeEstimation": "训练时间取决于数据集大小和选择的参数，通常需要0.5-2小时。",
      "kmSupportedFormats": "支持CSV或Excel格式。文件应包含蛋白质序列、底物SMILES以及对应的Km值。",
      "kmDatasetRequirement": "训练Km预测模型需要准备包含以下列的数据集:",
      "kmRequiredColumn": {
        "protein": "蛋白质氨基酸序列",
        "substrate": "底物分子的SMILES表示",
        "kmValue": "实验测定的Km值(μM或mM)"
      },
      "kmSuccessMessage": "您的Km预测模型训练任务已成功提交。任务ID: {{jobId}}",
      "tmSupportedFormats": "支持CSV或Excel格式。文件应包含蛋白质序列以及对应的Tm值和pH值。",
      "tmDatasetRequirement": "训练Tm预测模型需要准备包含以下列的数据集:",
      "tmRequiredColumn": {
        "protein": "蛋白质氨基酸序列",
        "tmValue": "实验测定的Tm值(°C)",
        "ph": "测量环境的pH值(可选)"
      },
      "tmDatasetSizeRecommendation": "建议数据集至少包含50个蛋白质样本以获得较好的训练效果。",
      "tmSuccessMessage": "您的Tm预测模型训练任务已成功提交。任务ID: {{jobId}}",
      "tmProcessStep": {
        "feature": "提取蛋白质序列特征"
      },
      "solubilitySupportedFormats": "支持CSV或Excel格式。文件应包含蛋白质序列以及对应的溶解度评分。",
      "solubilityDatasetRequirement": "训练溶解度预测模型需要准备包含以下列的数据集:",
      "solubilityRequiredColumn": {
        "protein": "蛋白质氨基酸序列",
        "score": "实验测定的溶解度评分(0-1范围)"
      },
      "solubilitySuccessMessage": "您的溶解度预测模型训练任务已成功提交。任务ID: {{jobId}}"
    }
  },
  "common": {
    "loading": "加载中...",
    "breadcrumb": {
      "home": "首页"
    },
    "featureTemplate": {
      "scientificApplications": "科学应用",
      "modelPerformance": "模型性能",
      "predictionAccuracy": "预测精度",
      "trainingDataReq": "所需训练数据",
      "outputResults": "输出结果"
    }
  },
  "language": {
    "zh": "中文",
    "en": "English",
    "resetAndRefresh": "重置并刷新"
  },
  "about": {
    "title": "关于我们",
    "lead": "我们致力于通过人工智能技术推动蛋白质工程的创新",
    "introduction": {
      "title": "项目简介",
      "content": "蛋白质特性预测平台是一个基于深度学习的在线预测工具，旨在为科研人员和工业用户提供快速、准确的蛋白质特性预测服务。通过输入蛋白质序列，您可以获得包括Kcat、Km、Tm和溶解度等重要参数的预测结果。"
    },
    "technology": {
      "title": "技术特点",
      "content": "我们的预测模型基于最新的深度学习算法，通过大量实验数据训练而成。平台支持多种输入方式，包括直接序列输入和文件上传，为用户提供便捷的使用体验。预测结果包含详细的参数信息和可视化展示，帮助用户更好地理解和应用预测数据。"
    },
    "applications": {
      "title": "应用领域",
      "content": "本平台可广泛应用于生物技术、制药、化工、食品等领域的研发工作，帮助研究人员筛选和优化蛋白质，加速新产品的开发进程，降低实验成本。"
    }
  },
  "faq": {
    "title": "常见问题",
    "lead": "关于蛋白质特性预测平台的常见问题和解答",
    "questions": {
      "usage": {
        "title": "如何使用预测功能？",
        "content": "您可以在首页选择要预测的蛋白质特性（Kcat、Km、Tm或溶解度），然后按照页面指引输入蛋白质序列。输入方式有两种：直接输入氨基酸序列或上传FASTA格式文件。对于需要底物信息的预测（如Kcat和Km），还需要提供底物的SMILES表示。提交后系统会进行计算并展示预测结果。"
      },
      "accuracy": {
        "title": "预测结果的准确性如何？",
        "content": "我们的预测模型基于大量实验数据训练，在测试集上表现出良好的预测准确性。但需要注意，预测结果仍然是一种理论估计，实际应用中可能存在一定误差。我们建议将预测结果作为实验设计和筛选的参考，而非最终决策依据。"
      },
      "supportedTypes": {
        "title": "支持哪些类型的蛋白质？",
        "content": "目前我们的平台主要支持酶类蛋白质的特性预测，包括但不限于水解酶、转移酶、氧化还原酶等。对于一些特殊类型的蛋白质或非天然氨基酸序列，预测准确性可能会受到影响。我们正在持续扩充训练数据，以提高对更多蛋白质类型的预测支持。"
      },
      "citation": {
        "title": "如何引用此平台的预测结果？",
        "content": "如果您在科研工作中使用了我们的预测结果，请引用我们的相关论文（详见\"关于\"页面）。我们也非常欢迎用户反馈预测结果的实验验证情况，这将帮助我们不断改进预测模型。"
      },
      "dataSecurity": {
        "title": "提交的数据是否安全？",
        "content": "我们高度重视用户数据安全。默认情况下，您提交的蛋白质序列和底物信息仅用于当前预测，不会永久存储或用于其他用途。如果您希望系统不保留任何数据，可以在使用后清除浏览器缓存。"
      }
    }
  },
  "api": {
    "title": "API接口文档",
    "lead": "通过API集成蛋白质特性预测功能到您自己的应用程序",
    "tabs": {
      "overview": "概述",
      "authentication": "认证",
      "endpoints": "接口端点",
      "examples": "使用示例"
    },
    "overview": {
      "title": "API概述",
      "content": "我们提供RESTful API接口，允许开发者将蛋白质特性预测功能集成到自己的应用程序中。所有API请求和响应均使用JSON格式，支持批量预测和异步处理。",
      "baseUrl": "API基础URL"
    },
    "authentication": {
      "title": "认证",
      "content": "所有API请求需要通过API密钥进行认证。您可以在个人账户页面申请和管理API密钥。API密钥应包含在请求头中："
    },
    "endpoints": {
      "title": "接口端点",
      "requestExample": "请求体示例",
      "sameAsKcat": "请求体示例同Kcat预测",
      "sameAsTm": "请求体示例同Tm预测",
      "kcat": {
        "title": "Kcat预测"
      },
      "km": {
        "title": "Km预测"
      },
      "tm": {
        "title": "Tm预测"
      },
      "solubility": {
        "title": "溶解度预测"
      }
    },
    "examples": {
      "title": "使用示例",
      "pythonKcatExample": "使用Python请求Kcat预测"
    }
  },
  "components": {
    "sequenceInput": {
      "proteinPlaceholder": "输入蛋白质氨基酸序列 (FASTA格式或纯序列)",
      "dnaPlaceholder": "输入DNA/RNA序列 (FASTA格式或纯序列)",
      "proteinInputMethod": "蛋白质序列输入方式",
      "dnaInputMethod": "DNA/RNA序列输入方式",
      "directInput": "直接输入序列",
      "uploadFile": "上传序列文件",
      "formatSupport": "支持FASTA格式或纯序列文本",
      "substrateInputMethod": "底物输入方式",
      "directSmilesInput": "直接输入SMILES",
      "uploadSmilesFile": "上传SMILES文件",
      "smilesPlaceholder": "输入底物的SMILES表示",
      "smilesSupport": "支持SMILES格式描述底物结构",
      "predicting": "预测中...",
      "startPredict": "开始预测",
      "errors": {
        "emptySequence": "请输入序列",
        "noFile": "请选择序列文件",
        "emptySmiles": "请输入底物SMILES",
        "noSmilesFile": "请选择SMILES文件"
      }
    },
    "resultDisplay": {
      "loading": "加载中...",
      "predictionResult": "预测结果",
      "parameter": "参数",
      "predictedValue": "预测值",
      "exportCsv": "导出CSV",
      "predictionInfo": "预测信息",
      "resultCount": "共 {{total}} 条预测结果，显示前 {{displayed}} 条",
      "proteinSequence": "蛋白质序列",
      "substrateSmiles": "底物SMILES",
      "confidenceInterval": "置信区间",
      "reliabilityScore": "可靠性评分",
      "moreResults": "共有 {{total}} 条结果，仅显示前 10 条。点击\'导出CSV\'查看所有结果。",
      "kcat": {
        "title": "Kcat预测结果",
        "predictedValue": "预测Kcat值 (s<sup>-1</sup>)"
      },
      "km": {
        "title": "Km预测结果",
        "predictedValue": "预测值 (mM)",
        "similarEnzymes": "相似酶的实验数据",
        "enzymeName": "酶名称",
        "sequenceSimilarity": "序列相似度",
        "experimentalKm": "实验Km (mM)"
      },
      "tm": {
        "title": "Tm预测结果",
        "predictedValue": "预测值 (°C)",
        "proteinFeatures": "蛋白质特征分析",
        "aminoAcidComposition": "氨基酸组成",
        "secondaryStructure": "二级结构预测",
        "isoelectricPoint": "等电点"
      },
      "solubility": {
        "title": "溶解度预测结果",
        "predictedSolubility": "预测溶解度",
        "solubilityScore": "可溶性评分",
        "keyFactors": "影响溶解度的关键因素",
        "factor": "因素",
        "score": "评分",
        "impact": "影响程度"
      },
      "promoter": {
        "title": "启动子强度预测结果",
        "predictedStrength": "预测相对强度",
        "sequenceFeatures": "序列特征分析",
        "minus10Box": "-10 box",
        "minus35Box": "-35 box",
        "gcContent": "GC 含量"
      },
      "rbs": {
        "title": "RBS翻译起始率预测结果",
        "predictedRate": "预测翻译起始率",
        "sequenceFeatures": "序列特征分析",
        "sdSequence": "Shine-Dalgarno序列",
        "sdDistance": "SD与起始密码子距离",
        "mfeEnergy": "二级结构自由能"
      }
    }
  },
  "predict": {
    "common": {
      "platformInfo": "平台说明: 本平台使用经过训练和验证的机器学习模型，确保预测结果的科学性和准确性。系统不会使用随机模拟数据，保证预测的严谨性。",
      "inputProtein": "输入蛋白质序列",
      "useSample": "使用此样例",
      "submit": "预测中...",
      "instructions": "使用说明",
      "resultInterp": "结果解读",
      "error": "预测请求失败",
      "errorTypes": {
        "modelNotFound": "预测服务暂时不可用：预测模型未加载或不存在。请联系系统管理员。",
        "scriptNotFound": "预测服务暂时不可用：预测脚本未找到。请联系系统管理员。",
        "unknown": "预测过程中发生未知错误"
      }
    },
    "kcat": {
      "description": "通过深度学习模型预测酶促反应的催化常数(Kcat)，帮助酶工程设计和优化。",
      "sampleProtein": "样例蛋白质序列",
      "proteinPlaceholder": "请输入蛋白质氨基酸序列 (FASTA格式或纯序列)",
      "inputSubstrate": "输入底物信息",
      "sampleSmiles": "样例底物SMILES",
      "sampleSmilesName": "对乙酰氨基酚",
      "inputSmilesDirectly": "直接输入SMILES",
      "uploadSmilesFile": "上传SMILES文件",
      "smilesPlaceholder": "输入底物的SMILES表示 (例如：CC(=O)Nc1ccc(O)cc1)",
      "smilesFormatHelp": "支持SMILES格式描述底物结构，例如对乙酰氨基酚：CC(=O)Nc1ccc(O)cc1",
      "predictButton": "预测Kcat值",
      "error": {
        "missingInput": "请输入蛋白质序列和底物SMILES，或上传相应文件"
      },
      "toolDescription": "Kcat预测工具可以预测给定蛋白质酶对特定底物的催化常数。",
      "inputParams": "输入参数",
      "inputParam": {
        "protein": "蛋白质序列：酶的氨基酸序列",
        "substrate": "底物SMILES：底物分子的SMILES表示"
      },
      "resultInterpretation": "Kcat值(s<sup>-1</sup>)表示每个酶分子每秒转化的底物分子数量。预测结果包含预测值、置信区间和可靠性评分。"
    },
    "km": {
      "title": "Km预测",
      "titleEn": "Km Prediction",
      "description": "通过深度学习模型预测酶与底物之间的米氏常数(Km)，帮助理解酶与底物的亲和力。",
      "sampleProtein": "样例蛋白质序列",
      "proteinPlaceholder": "请输入蛋白质氨基酸序列 (FASTA格式或纯序列)",
      "inputSubstrate": "输入底物信息",
      "sampleSmiles": "样例底物SMILES",
      "sampleSmilesName": "对乙酰氨基酚",
      "inputSmilesDirectly": "直接输入SMILES",
      "uploadSmilesFile": "上传SMILES文件",
      "smilesPlaceholder": "输入底物的SMILES表示 (例如：CC(=O)Nc1ccc(O)cc1)",
      "smilesFormatHelp": "支持SMILES格式描述底物结构，例如对乙酰氨基酚：CC(=O)Nc1ccc(O)cc1",
      "predictButton": "预测Km值",
      "error": {
        "missingInput": "请输入蛋白质序列和底物SMILES，或上传相应文件"
      },
      "toolDescription": "Km预测工具可以预测给定蛋白质酶对特定底物的米氏常数。",
      "inputParams": "输入参数",
      "inputParam": {
        "protein": "蛋白质序列：酶的氨基酸序列",
        "substrate": "底物SMILES：底物分子的SMILES表示"
      },
      "resultInterpretation": "Km值(μM或mM)表示酶反应速率达到最大值一半时的底物浓度。Km值越小，表示酶与底物亲和力越强。预测结果包含预测值、置信区间和可靠性评分。"
    },
    "tm": {
      "title": "T<sub>m</sub>预测",
      "titleEn": "Tm Prediction",
      "description": "通过深度学习模型预测蛋白质的熔点(Tm)，帮助评估蛋白质的热稳定性。",
      "sampleProtein": "样例蛋白质序列",
      "proteinPlaceholder": "请输入蛋白质氨基酸序列 (FASTA格式或纯序列)",
      "predictButton": "预测Tm值",
      "error": {
        "missingInput": "请输入蛋白质序列或上传序列文件"
      },
      "toolDescription": "Tm预测工具可以预测给定蛋白质的熔点(Tm)值。",
      "inputParams": "输入参数",
      "inputParam": {
        "protein": "蛋白质序列：目标蛋白质的氨基酸序列"
      },
      "resultInterpretation": "Tm值(°C)表示蛋白质在热变性过程中50%蛋白质处于解折叠状态的温度。Tm值越高表示蛋白质热稳定性越好。预测结果包含预测值、置信区间和可靠性评分。"
    },
    "solubility": {
      "title": "蛋白质溶解度预测",
      "titleEn": "Solubility Prediction",
      "description": "通过深度学习模型预测蛋白质在大肠杆菌表达系统中的溶解度，帮助优化蛋白质表达条件。",
      "sampleProtein": "样例蛋白质序列",
      "proteinPlaceholder": "请输入蛋白质氨基酸序列 (FASTA格式或纯序列)",
      "predictButton": "预测溶解度",
      "error": {
        "missingInput": "请输入蛋白质序列或上传序列文件"
      },
      "toolDescription": "蛋白质溶解度预测工具可以预测给定蛋白质在大肠杆菌表达系统中的溶解度水平。",
      "inputParams": "输入参数",
      "inputParam": {
        "protein": "蛋白质序列：目标蛋白质的氨基酸序列"
      },
      "resultInterpretation": "溶解度评分范围从0到1，数值越高表示蛋白质在大肠杆菌中表达时可溶性越好。预测结果包含预测值、置信区间和可靠性评分。"
    }
  }
};

// 英文翻译
export const enTranslation = {
  "app": {
    "title": "Bioinformatics Platform",
    "nav": {
      "home": "Home",
      "protein": "Protein Functions",
      "gene": "Gene Functions",
      "training": "My Training Tasks",
      "about": "About",
      "faq": "FAQ",
      "api": "API"
    }
  },
  "home": {
    "banner": {
      "description": "Utilizing advanced deep learning algorithms to provide accurate predictions and professional training services for protein and gene sequences, empowering scientific research and industrial applications",
      "start": "Get Started",
      "learnMore": "Learn More"
    },
    "advantages": {
      "title": "Platform Advantages",
      "description": "Perfect combination of advanced algorithms and rich data, providing you with accurate and reliable bioinformatics services",
      "accuracy": {
        "title": "High Precision Prediction",
        "description": "Deep learning models trained on large-scale experimental data, providing industry-leading prediction accuracy"
      },
      "speed": {
        "title": "Fast Response",
        "description": "Optimized computing architecture, responding to your prediction requests in seconds, no lengthy waiting"
      },
      "customization": {
        "title": "Custom Training",
        "description": "Support users in training proprietary models with their own data, meeting the needs of specific research fields"
      }
    },
    "combined": {
      "title": "Prediction and Training Combined",
      "description": "We've built a complete bioinformatics platform that not only provides high-precision prediction capabilities but also helps you train customized models.",
      "points": {
        "predict": "Directly use our trained models for prediction",
        "upload": "Upload your own data to train proprietary models",
        "manage": "Manage and track your training tasks",
        "download": "Download trained models for local deployment"
      },
      "button": "View My Training Tasks"
    },
    "cta": {
      "title": "Ready to Get Started?",
      "description": "Explore our comprehensive protein and gene functions to support your scientific research and industrial applications",
      "button": "Start Now"
    },
    "protein": {
      "title": "Protein Functions",
      "kcat": {
        "title": "Kcat",
        "description": "Catalytic constant of enzymatic reactions, reflecting enzyme activity and efficiency"
      },
      "km": {
        "title": "Km",
        "description": "Michaelis constant, indicating enzyme-substrate affinity"
      },
      "tm": {
        "title": "Tm",
        "description": "Protein thermal stability, representing protein denaturation temperature"
      },
      "solubility": {
        "title": "Protein Solubility",
        "description": "Protein's ability to dissolve in solution"
      }
    },
    "gene": {
      "title": "Gene Functions",
      "promoter": {
        "title": "Promoter Strength",
        "description": "Prediction of gene expression initiation region activity strength"
      },
      "rbs": {
        "title": "RBS Translation Initiation Rate",
        "description": "Prediction of ribosome binding site translation efficiency"
      }
    }
  },
  "features": {
    "predict": "Predict",
    "train": "Train",
    "developing": {
      "title": "Feature Under Development",
      "description": "This feature is currently under active development, stay tuned!",
      "return": "Return to Home"
    },
    "kcat": {
      "title": "Kcat Prediction",
      "titleEn": "Kcat Prediction",
      "description": "Use our trained deep learning models to accurately predict the catalytic constants of enzyme-substrate pairs",
      "train": {
        "title": "Kcat Training",
        "titleEn": "Kcat Training",
        "description": "Upload your proprietary data to train customized Kcat prediction models"
      },
      "titleSuffix": "Catalytic Constant",
      "descriptionFull": "The catalytic constant (k<sub>cat</sub>) is a fundamental parameter in enzyme reaction kinetics, defining the number of reaction turnovers completed per unit time by each enzyme active site under substrate saturation conditions (S≫K<sub>m</sub>).",
      "formula": {
        "title": "k<sub>cat</sub> in the Michaelis-Menten Equation",
        "explanation": "Where v is the reaction rate, V<sub>max</sub> is the maximum reaction rate, [S] is the substrate concentration, K<sub>m</sub> is the Michaelis constant, and [E]<sub>0</sub> is the total enzyme concentration"
      },
      "keyPoints": {
        "unit": "Units are s<sup>-1</sup> (per second), typically ranging from 10<sup>-2</sup> to 10<sup>7</sup>s<sup>-1</sup>",
        "measure": "Reflects the basic measure of enzyme catalytic efficiency, influenced by active site structure and substrate characteristics",
        "specificity": "Together with K<sub>m</sub>, determines the enzyme's specificity constant (k<sub>cat</sub>/K<sub>m</sub>), reflecting the enzyme's catalytic efficiency for the substrate"
      },
      "scienceApplication": {
        "title": "Key Parameter in Enzyme Engineering and Metabolic Engineering",
        "points": {
          "industrial": "Development and optimization of industrial enzyme catalysts",
          "metabolic": "Flux control point analysis in metabolic engineering",
          "evolution": "Designing directed evolution strategies to improve catalytic efficiency",
          "biocatalysis": "Biocatalysis and biotransformation process optimization"
        }
      },
      "molecularInfo": {
        "title": "Biophysical Significance of Catalytic Constant",
        "step": "In the conversion process of enzymatic reactions, k<sub>cat</sub> corresponds to the rate-limiting step from the enzyme-substrate complex (ES) to product formation. According to transition state theory, k<sub>cat</sub> can be expressed as:",
        "formula": "Where k<sub>B</sub> is the Boltzmann constant, T is the absolute temperature, h is the Planck constant, ΔG<sup>‡</sup> is the activation free energy, and R is the gas constant",
        "factors": "The catalytic constant is influenced by multiple factors, including enzyme conformational changes, substrate binding site geometry, chemical properties of active site residues, and enzyme-substrate interaction networks. By integrating these complex pieces of information through deep learning methods, accurate prediction of k<sub>cat</sub> can be achieved."
      },
      "modelPerformance": {
        "accuracy": "Our Kcat prediction model, based on convolutional neural networks and attention mechanisms, achieves an R² value of 0.85 and an RMSE value of 0.42 on multi-enzyme family test sets, with excellent performance especially in hydrolase and transferase families.",
        "trainingData": "We recommend providing experimental data for at least 100 enzyme-substrate pairs, including the enzyme's amino acid sequence, the substrate's molecular structure in SMILES format, and experimentally determined k<sub>cat</sub> values. Experimental conditions such as pH and temperature can also serve as auxiliary features.",
        "output": "The model predicts Kcat values (s<sup>-1</sup>), 95% confidence intervals on a logarithmic scale, model confidence scores, as well as key residue contribution analysis and enzyme-substrate interaction heat maps to help understand the catalytic mechanism."
      }
    },
    "km": {
      "title": "Km Prediction",
      "titleEn": "Km Prediction",
      "description": "Use our trained deep learning models to accurately predict the Michaelis constants of enzyme-substrate pairs",
      "train": {
        "title": "Km Training",
        "titleEn": "Km Training",
        "description": "Upload your proprietary data to train customized Km prediction models"
      },
      "titleSuffix": "Michaelis Constant",
      "descriptionFull": "The Michaelis constant (K<sub>m</sub>) is a fundamental parameter in enzyme kinetics, defined as the substrate concentration at which the enzyme reaction rate reaches half of its maximum value, reflecting the affinity between enzyme and substrate.",
      "formula": {
        "title": "K<sub>m</sub> in Michaelis-Menten Equation",
        "explanation": "Where v is the reaction rate, V<sub>max</sub> is the maximum reaction rate, [S] is the substrate concentration, and K<sub>m</sub> is the Michaelis constant"
      },
      "keyPoints": {
        "unit": "Typically measured in μM or mM, with lower values indicating stronger enzyme-substrate affinity",
        "significance": "Reflects the affinity of enzyme-substrate binding, an important parameter for measuring enzyme catalytic efficiency",
        "factors": "Influenced by active site structure, substrate characteristics, and environmental factors such as pH and temperature",
        "affinity": "Affinity indicator, directly reflecting the strength of enzyme-substrate binding",
        "specificity": "Together with k<sub>cat</sub>, determines the enzyme's specificity constant (k<sub>cat</sub>/K<sub>m</sub>), characterizing the enzyme's catalytic efficiency for specific substrates"
      },
      "scienceApplication": {
        "title": "Key Parameter in Enzyme Engineering and Drug Development",
        "points": {
          "engineering": "Optimization and screening of enzyme catalysts",
          "drugs": "Studies of drug metabolism kinetics",
          "catalysis": "Optimization of biocatalytic reaction conditions",
          "structure": "Exploration of enzyme structure-function relationships",
          "modeling": "Enzyme-substrate interaction modeling and prediction",
          "drug": "Drug design and target optimization",
          "comparison": "Comparative analysis of different substrates and enzyme systems",
          "optimization": "Performance optimization of industrial enzyme preparations"
        }
      },
      "molecularInfo": {
        "title": "Biophysical Significance of the Michaelis Constant",
        "step": "In the enzymatic reaction process, K<sub>m</sub> reflects the dissociation constant of the enzyme-substrate complex (ES), a key parameter for understanding the enzyme catalytic mechanism.",
        "factors": "The Michaelis constant is influenced by various factors, including enzyme conformation, substrate binding to the active site, and surrounding environment. Through deep learning methods, these complex pieces of information can be integrated to achieve accurate prediction of K<sub>m</sub>.",
        "conclusion": "Accurate prediction of K<sub>m</sub> values helps understand enzyme-substrate interaction mechanisms and guides directed evolution and optimization design of enzymes."
      },
      "modelPerformance": {
        "accuracy": "Our Km prediction model, based on deep learning algorithms, achieves an R² value of 0.82 and an RMSE value of 0.45 on multi-enzyme family test sets, with excellent performance especially in hydrolase and transferase families.",
        "trainingData": "We recommend providing experimental data for at least 100 enzyme-substrate pairs, including the enzyme's amino acid sequence, the substrate's molecular structure in SMILES format, and experimentally determined K<sub>m</sub> values.",
        "output": "The model predicts Km values (μM or mM), 95% confidence intervals on a logarithmic scale, model confidence scores, as well as enzyme-substrate binding site analysis."
      }
    },
    "tm": {
      "title": "Tm Prediction",
      "titleEn": "Tm Prediction",
      "description": "Use our trained deep learning models to accurately predict protein thermal stability",
      "train": {
        "title": "Tm Training",
        "titleEn": "Tm Training",
        "description": "Upload your proprietary data to train customized Tm prediction models"
      },
      "titleSuffix": "Thermal Stability",
      "descriptionFull": "Melting temperature (T<sub>m</sub>) is a key parameter characterizing protein thermal stability, defined as the temperature at which 50% of the protein is in an unfolded state during thermal denaturation.",
      "formula": {
        "title": "Protein Thermal Denaturation Equilibrium",
        "explanation": "Where ΔG is the free energy change of unfolding, ΔH is the enthalpy change, ΔS is the entropy change, and T<sub>m</sub> is the melting temperature"
      },
      "keyPoints": {
        "unit": "Measured in °C or K, with higher values indicating better protein thermal stability",
        "significance": "Reflects protein structural stability, an important indicator for industrial applications and drug development",
        "factors": "Influenced by protein structure, amino acid composition, disulfide bonds, and environmental factors such as pH and ionic strength"
      },
      "scienceApplication": {
        "title": "Key Parameter in Protein Engineering and Biotechnology",
        "points": {
          "engineering": "Protein engineering and thermal stability optimization",
          "drugs": "Stability studies of biopharmaceuticals",
          "catalysis": "Development and application of thermostable enzymes",
          "structure": "Analysis of protein structural stability"
        }
      },
      "molecularInfo": {
        "title": "Molecular Basis of Protein Thermal Stability",
        "step": "Protein thermal stability is influenced by various molecular interactions, including hydrogen bonds, hydrophobic interactions, salt bridges, and disulfide bonds.",
        "factors": {
          "hydrophobic": "Hydrophobic Core",
          "hydrogen": "Hydrogen Bond Network",
          "saltBridge": "Salt Bridge Interactions",
          "disulfide": "Disulfide Bonds",
          "surface": "Surface Charge Distribution",
          "loops": "Flexible Loop Structures",
          "hydrophobicDesc": "A tight hydrophobic core helps improve protein thermal stability",
          "hydrogenDesc": "Extensive hydrogen bond networks enhance protein structural stability",
          "saltBridgeDesc": "Salt bridge interactions contribute significantly to stability under high temperature conditions",
          "disulfideDesc": "Covalent connections via disulfide bonds can significantly improve thermal stability",
          "surfaceDesc": "Optimized surface charge distribution reduces electrostatic repulsion",
          "loopsDesc": "Shortening flexible loops can reduce entropy-driven unfolding"
        },
        "conclusion": "By integrating these complex features through deep learning methods, accurate prediction of protein Tm values can be achieved, guiding thermal stability optimization design."
      },
      "modelPerformance": {
        "accuracy": "Our Tm prediction model, based on deep learning algorithms, achieves an R² value of 0.85 and a mean absolute error of 3.2°C on test sets of various protein families, providing high prediction accuracy.",
        "trainingData": "We recommend providing experimental data for at least 50 proteins, including the protein's amino acid sequence and experimentally determined Tm values. Experimental condition information such as pH and buffer can be optionally provided.",
        "output": "The model predicts Tm values (°C), 95% confidence intervals, model confidence scores, as well as analysis of key residues affecting thermal stability."
      }
    },
    "solubility": {
      "title": "Solubility Prediction",
      "titleEn": "Solubility Prediction",
      "description": "Use our trained deep learning models to accurately predict protein solubility",
      "train": {
        "title": "Solubility Training",
        "titleEn": "Solubility Training",
        "description": "Upload your proprietary data to train customized solubility prediction models"
      },
      "titleOnly": "Protein Solubility",
      "descriptionFull": "Protein solubility refers to a protein's ability to remain in a dissolved state under specific solvent and environmental conditions, which is of great importance for protein expression, purification, and application.",
      "formula": {
        "title": "Thermodynamic Relationship of Solubility",
        "explanation": "Where ln(S) is the logarithmic value of solubility, ΔG<sub>sol</sub> is the free energy of dissolution, ΔH<sub>sol</sub> is the enthalpy change of dissolution, ΔS<sub>sol</sub> is the entropy change of dissolution, R is the gas constant, and T is the absolute temperature"
      },
      "keyPoints": {
        "determinants": "Protein solubility is mainly influenced by amino acid composition, surface charge distribution, hydrophobicity, and secondary structure",
        "impact": "Solubility affects protein expression yield, purification efficiency, long-term stability, and biological activity",
        "conditions": "Environmental factors such as pH, temperature, ionic strength, and additives can significantly modulate protein solubility"
      },
      "scienceApplication": {
        "title": "Key Parameter in Protein Science and Biopharmaceuticals",
        "points": {
          "industrial": "Development and formulation optimization of industrial enzyme preparations",
          "drug": "Formulation development and storage stability of biopharmaceuticals",
          "antibody": "High-concentration formulation studies of antibody drugs",
          "circuit": "Synthetic biology protein circuit design"
        }
      },
      "molecularInfo": {
        "title": "Molecular Factors Affecting Protein Solubility",
        "step": "The protein dissolution process involves complex molecular interactions, including protein-solvent and protein-protein interactions. The following are the main influencing factors:",
        "factors": {
          "charge": "Surface Charge Distribution",
          "hydrophobic": "Hydrophobic Residue Distribution",
          "secondary": "Secondary Structure Features",
          "disorder": "Proportion of Disordered Regions",
          "translation": "Translation Rate Influence",
          "chaperone": "Molecular Chaperone Assistance",
          "chargeDesc": "Evenly distributed surface charges help improve solubility",
          "hydrophobicDesc": "The proportion of exposed hydrophobic residues affects aggregation tendency",
          "secondaryDesc": "The proportion of secondary structures affects folding stability and solubility",
          "disorderDesc": "A higher proportion of disordered regions is usually favorable for solubility",
          "translationDesc": "Translation rate affects folding efficiency and soluble expression",
          "chaperoneDesc": "Molecular chaperones assist in proper protein folding and dissolution"
        },
        "conclusion": "By integrating these factors through deep learning methods, accurate prediction of protein solubility characteristics can be achieved, guiding solubility optimization design."
      },
      "modelPerformance": {
        "accuracy": "Our solubility prediction model achieves an AUC value of 0.82 and a classification accuracy of 78% on E. coli expression system test sets, effectively distinguishing between soluble and insoluble proteins.",
        "trainingData": "We recommend providing expression solubility data for at least 100 proteins, including the protein's amino acid sequence and experimentally verified solubility results (soluble/insoluble or solubility scores).",
        "output": "The model predicts solubility scores (0-1), 95% confidence intervals, model confidence scores, as well as analysis of key factors affecting solubility."
      }
    },
    "promoter": {
      "title": "Promoter Strength Prediction",
      "titleEn": "Promoter Strength Prediction",
      "description": "Predict promoter expression strength through deep learning models to assist gene engineering design and optimization.",
      "developingDescription": "We are actively developing the promoter strength prediction feature, which will help you predict and optimize promoter performance in gene expression systems. This feature is still under development, please be patient, we will launch this service as soon as possible.",
      "sequencePlaceholder": "Enter promoter DNA sequence (ATCG)",
      "predictButton": "Predict Promoter Strength",
      "resultTitle": "Promoter Strength Prediction Result",
      "error": {
        "missingInput": "Please enter DNA sequence or upload sequence file"
      },
      "toolDescription": "The promoter strength prediction tool can predict the relative expression strength of a given DNA sequence as a promoter.",
      "applicableSequences": "Applicable Sequences",
      "applicableSequence": {
        "ecoli": "E. coli promoter sequences",
        "length": "Length should be between 50-200bp",
        "bases": "Should only contain ATCG bases"
      },
      "resultInterpretation": "The prediction result is a relative expression strength value, typically ranging from 0-1, with higher values indicating stronger promoter strength.",
      "introduction": {
        "title": "Introduction to Promoter Function",
        "content": "Promoters are key regulatory sequences on DNA that control gene expression, determining the efficiency of RNA polymerase binding to DNA and the frequency of transcription initiation. Promoter strength directly affects protein yield and is an important element for precisely regulating gene expression in synthetic biology."
      },
      "goal": {
        "title": "Our Development Goals",
        "content": "Our goal is to develop a high-precision promoter strength prediction tool that analyzes promoter sequence features through machine learning models to accurately predict its expression efficiency in different host cells, helping researchers and engineers design promoter elements that best suit their applications."
      },
      "train": {
        "title": "Promoter Strength Training",
        "titleEn": "Promoter Strength Training",
        "description": "Use your own promoter sequence and strength data to train customized promoter strength prediction models"
      }
    },
    "rbs": {
      "title": "RBS Translation Initiation Rate Prediction",
      "description": "Use deep learning models to predict the translation efficiency of ribosome binding sites",
      "train": {
        "title": "RBS Translation Rate Training",
        "description": "Upload your own RBS sequence and activity data to train customized RBS prediction models"
      },
      "developingDescription": "We are actively developing the RBS translation initiation rate prediction feature, which will help you predict and optimize ribosome binding site performance in gene expression systems. This feature is still under development, please be patient, we will launch this service as soon as possible.",
      "introduction": {
        "title": "Introduction to RBS Function",
        "content": "The ribosome binding site (RBS) is a key sequence on mRNA that controls the initiation of translation, determining the efficiency of ribosome binding to mRNA. The strength of RBS directly affects protein yield and is another important level for precisely regulating gene expression in synthetic biology."
      },
      "goal": {
        "title": "Our Development Goals",
        "content": "Our goal is to develop a high-precision RBS translation initiation rate prediction tool that analyzes RBS sequence features and secondary structures through machine learning models to accurately predict its translation efficiency in different host cells, helping researchers and engineers design RBS elements that best suit their applications."
      }
    }
  },
  "training": {
    "developing": {
      "title": "This Feature is Under Development",
      "description": "We are currently upgrading and improving the training functionality and temporarily cannot provide model training services. Please be patient, we will restore this feature as soon as possible."
    },
    "pageTitle": "Model Training Services",
    "customTitle": "Customized Model Training",
    "customDescription": "Welcome to our model training service. Through this service, you can use your own data to train customized prediction models to improve prediction accuracy for your specific research area. After training, you can download the model or use it directly on our platform.",
    "advantages": "Advantages",
    "advantagesList": {
      "ownData": "Use your own dataset for training",
      "customization": "Customize models based on specific needs",
      "accuracy": "Improve prediction accuracy for your research field",
      "download": "Download models or use them directly on the platform after training"
    },
    "availableServices": "Available Training Services",
    "startTraining": "Start Training",
    "howToUse": "How to Use Training Services",
    "steps": {
      "selectModel": "Select the model type you want to train",
      "uploadData": "Upload your training dataset (CSV or Excel format)",
      "setParams": "Set training parameters",
      "submitJob": "Submit training task",
      "waitCompletion": "Wait for training to complete (you can check progress anytime)",
      "download": "Download the trained model or use it directly on the platform"
    },
    "note": "Note",
    "trainingTimeNote": "Training time depends on dataset size and selected parameters. Large datasets may take several hours to complete training.",
    "viewTasks": "View My Training Tasks",
    "viewTasksDescription": "You can view and manage all your previously submitted training tasks, including ongoing and completed tasks.",
    "viewMyTasks": "View My Training Tasks",
    "services": {
      "kcat": {
        "title": "Kcat Prediction Model Training",
        "description": "Use your own enzyme-substrate data to train customized Kcat prediction models"
      },
      "km": {
        "title": "Km Prediction Model Training",
        "description": "Use your own enzyme-substrate data to train customized Km prediction models"
      },
      "solubility": {
        "title": "Protein Solubility Prediction Model Training",
        "description": "Use your own protein solubility data to train customized solubility prediction models"
      },
      "promoter": {
        "title": "Promoter Strength Prediction Model Training",
        "description": "Use your own promoter sequence and strength data to train customized promoter strength prediction models"
      },
      "rbs": {
        "title": "RBS Prediction Model Training",
        "description": "Use your own RBS sequence and activity data to train customized RBS prediction models"
      }
    },
    "jobs": {
      "title": "My Training Tasks",
      "refresh": "Refresh Tasks",
      "refreshing": "Refreshing...",
      "loading": "Loading task list...",
      "empty": "You haven't submitted any training tasks yet",
      "fetchError": "Failed to fetch training tasks",
      "fetchErrorMsg": "Error occurred while fetching training tasks",
      "refreshError": "Error refreshing task status",
      "cancelError": "Failed to cancel task {{jobId}}",
      "cancelErrorMsg": "Error occurred while cancelling task",
      "downloadError": "Error occurred while downloading model",
      "cancelledMessage": "Task cancelled",
      "trainingFailed": "Training failed",
      "download": "Download",
      "cancel": "Cancel",
      "status": {
        "queued": "Queued",
        "running": "Running",
        "completed": "Completed",
        "failed": "Failed",
        "unknown": "Unknown"
      },
      "table": {
        "id": "ID",
        "type": "Model Type",
        "description": "Description",
        "status": "Status",
        "progress": "Progress",
        "created": "Created At",
        "updated": "Updated At",
        "actions": "Actions"
      },
      "modelType": {
        "kcat": "Kcat Prediction",
        "km": "Km Prediction",
        "solubility": "Solubility Prediction",
        "promoter": "Promoter Strength",
        "rbs": "RBS Prediction"
      }
    },
    "form": {
      "uploadDataset": "Upload Training Dataset",
      "description": "Training Task Description (Optional)",
      "descriptionPlaceholder": "Add a description for your training task for easier identification later",
      "supportedFormats": "Supports CSV or Excel formats. The file should contain protein sequences, substrate SMILES, and corresponding Kcat values.",
      "downloadTemplate": "Download template file",
      "advancedParams": "Advanced Training Parameters",
      "epochs": "Training Epochs",
      "epochsRecommendation": "Recommended value: 50-200. Higher values lead to longer training times.",
      "batchSize": "Batch Size",
      "batchSizeRecommendation": "Recommended values: 16, 32, 64. Smaller batch sizes typically result in better generalization.",
      "learningRate": "Learning Rate",
      "learningRateRecommendation": "Recommended value: 0.001. Affects model convergence speed and stability.",
      "validationSplit": "Validation Split",
      "validationSplitRecommendation": "Recommended value: 0.2. Proportion of the dataset used for validation.",
      "submit": "Submit Training Task",
      "submitSuccess": "Training Task Submitted Successfully!",
      "successMessage": "Your Kcat prediction model training task has been submitted successfully. Task ID: {{jobId}}",
      "redirectMessage": "The system is processing your training request. You will be automatically redirected to the task management page in 3 seconds, where you can view the training progress.",
      "submitError": "Failed to submit training task",
      "submitErrorMsg": "Error occurred while submitting training task",
      "dataset": {
        "error": "Please select a dataset file"
      },
      "requirements": "Dataset Requirements",
      "kcatDatasetRequirement": "Training a Kcat prediction model requires a dataset with the following columns:",
      "kcatRequiredColumn": {
        "protein": "Protein amino acid sequence",
        "substrate": "Substrate molecule in SMILES format",
        "kcatValue": "Experimentally determined kcat value (s<sup>-1</sup>)"
      },
      "tip": "Tip",
      "datasetSizeRecommendation": "It is recommended that the dataset contains at least 100 samples for better training results.",
      "process": "Training Process",
      "processDescription": "After submission, the system will:",
      "processStep": {
        "validation": "Validate and preprocess your data",
        "training": "Train the deep learning model",
        "evaluation": "Evaluate model performance",
        "modelGeneration": "Generate downloadable trained model"
      },
      "trainingTimeEstimation": "Training time depends on dataset size and selected parameters, typically requiring 0.5-2 hours.",
      "kmSupportedFormats": "Supports CSV or Excel formats. The file should contain protein sequences, substrate SMILES, and corresponding Km values.",
      "kmDatasetRequirement": "Training a Km prediction model requires a dataset with the following columns:",
      "kmRequiredColumn": {
        "protein": "Protein amino acid sequence",
        "substrate": "Substrate molecule in SMILES format",
        "kmValue": "Experimentally determined Km value (μM or mM)"
      },
      "kmSuccessMessage": "Your Km prediction model training task has been submitted successfully. Task ID: {{jobId}}",
      "tmSupportedFormats": "Supports CSV or Excel formats. The file should contain protein sequences and corresponding Tm values and pH values.",
      "tmDatasetRequirement": "Training a Tm prediction model requires a dataset with the following columns:",
      "tmRequiredColumn": {
        "protein": "Protein amino acid sequence",
        "tmValue": "Experimentally determined Tm value (°C)",
        "ph": "pH value of the measurement environment (optional)"
      },
      "tmDatasetSizeRecommendation": "It is recommended that the dataset contains at least 50 protein samples for better training results.",
      "tmSuccessMessage": "Your Tm prediction model training task has been submitted successfully. Task ID: {{jobId}}",
      "tmProcessStep": {
        "feature": "Extract protein sequence features"
      },
      "solubilitySupportedFormats": "Supports CSV or Excel formats. The file should contain protein sequences and corresponding solubility scores.",
      "solubilityDatasetRequirement": "Training a solubility prediction model requires a dataset with the following columns:",
      "solubilityRequiredColumn": {
        "protein": "Protein amino acid sequence",
        "score": "Experimentally determined solubility score (range 0-1)"
      },
      "solubilitySuccessMessage": "Your solubility prediction model training task has been submitted successfully. Task ID: {{jobId}}"
    }
  },
  "common": {
    "loading": "Loading...",
    "breadcrumb": {
      "home": "Home"
    },
    "featureTemplate": {
      "scientificApplications": "Scientific Applications",
      "modelPerformance": "Model Performance",
      "predictionAccuracy": "Prediction Accuracy",
      "trainingDataReq": "Required Training Data",
      "outputResults": "Output Results"
    }
  },
  "language": {
    "zh": "中文",
    "en": "English",
    "resetAndRefresh": "Reset and Refresh"
  },
  "about": {
    "title": "About Us",
    "lead": "We are committed to driving protein engineering innovation through artificial intelligence technology",
    "introduction": {
      "title": "Project Introduction",
      "content": "The Protein Property Prediction Platform is an online prediction tool based on deep learning, designed to provide fast and accurate protein property prediction services for researchers and industrial users. By inputting protein sequences, you can obtain prediction results for important parameters including Kcat, Km, Tm, and solubility."
    },
    "technology": {
      "title": "Technical Features",
      "content": "Our prediction models are based on the latest deep learning algorithms, trained on large amounts of experimental data. The platform supports multiple input methods, including direct sequence input and file upload, providing users with a convenient experience. Prediction results include detailed parameter information and visualizations to help users better understand and apply the prediction data."
    },
    "applications": {
      "title": "Application Areas",
      "content": "This platform can be widely applied to R&D work in biotechnology, pharmaceutical, chemical, food and other fields, helping researchers screen and optimize proteins, accelerate new product development, and reduce experimental costs."
    }
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "lead": "Common questions and answers about the Protein Property Prediction Platform",
    "questions": {
      "usage": {
        "title": "How to use the prediction features?",
        "content": "You can select the protein property you want to predict (Kcat, Km, Tm, or solubility) on the homepage, then follow the page guidelines to input the protein sequence. There are two input methods: directly entering the amino acid sequence or uploading a FASTA format file. For predictions requiring substrate information (such as Kcat and Km), you also need to provide the SMILES representation of the substrate. After submission, the system will calculate and display the prediction results."
      },
      "accuracy": {
        "title": "How accurate are the prediction results?",
        "content": "Our prediction models are trained on large amounts of experimental data and show good prediction accuracy on test sets. However, it should be noted that prediction results are still theoretical estimates and may have some errors in practical applications. We recommend using prediction results as a reference for experimental design and screening, rather than as a final decision basis."
      },
      "supportedTypes": {
        "title": "What types of proteins are supported?",
        "content": "Currently, our platform mainly supports property prediction for enzyme proteins, including but not limited to hydrolases, transferases, oxidoreductases, etc. For some special types of proteins or non-natural amino acid sequences, prediction accuracy may be affected. We are continuously expanding our training data to improve prediction support for more protein types."
      },
      "citation": {
        "title": "How to cite the prediction results from this platform?",
        "content": "If you use our prediction results in your research work, please cite our relevant papers (see the \"About\" page for details). We also welcome users to provide feedback on experimental validation of prediction results, which will help us continuously improve our prediction models."
      },
      "dataSecurity": {
        "title": "Is the submitted data secure?",
        "content": "We highly value user data security. By default, the protein sequences and substrate information you submit are only used for the current prediction and will not be permanently stored or used for other purposes. If you want the system not to retain any data, you can clear your browser cache after use."
      }
    }
  },
  "api": {
    "title": "API Documentation",
    "lead": "Integrate protein property prediction functionality into your own applications through API",
    "tabs": {
      "overview": "Overview",
      "authentication": "Authentication",
      "endpoints": "Endpoints",
      "examples": "Examples"
    },
    "overview": {
      "title": "API Overview",
      "content": "We provide RESTful API interfaces allowing developers to integrate protein property prediction functionality into their own applications. All API requests and responses use JSON format, supporting batch prediction and asynchronous processing.",
      "baseUrl": "API Base URL"
    },
    "authentication": {
      "title": "Authentication",
      "content": "All API requests require authentication via an API key. You can apply for and manage API keys on your personal account page. The API key should be included in the request header:"
    },
    "endpoints": {
      "title": "Endpoints",
      "requestExample": "Request body example",
      "sameAsKcat": "Request body example same as Kcat prediction",
      "sameAsTm": "Request body example same as Tm prediction",
      "kcat": {
        "title": "Kcat Prediction"
      },
      "km": {
        "title": "Km Prediction"
      },
      "tm": {
        "title": "Tm Prediction"
      },
      "solubility": {
        "title": "Solubility Prediction"
      }
    },
    "examples": {
      "title": "Usage Examples",
      "pythonKcatExample": "Using Python to request Kcat prediction"
    }
  },
  "components": {
    "sequenceInput": {
      "proteinPlaceholder": "Enter protein amino acid sequence (FASTA format or plain sequence)",
      "dnaPlaceholder": "Enter DNA/RNA sequence (FASTA format or plain sequence)",
      "proteinInputMethod": "Protein Sequence Input Method",
      "dnaInputMethod": "DNA/RNA Sequence Input Method",
      "directInput": "Direct Input",
      "uploadFile": "Upload File",
      "formatSupport": "Supports FASTA format or plain sequence text",
      "substrateInputMethod": "Substrate Input Method",
      "directSmilesInput": "Enter SMILES Directly",
      "uploadSmilesFile": "Upload SMILES File",
      "smilesPlaceholder": "Enter substrate SMILES representation",
      "smilesSupport": "Supports SMILES format to describe substrate structure",
      "predicting": "Predicting...",
      "startPredict": "Start Prediction",
      "errors": {
        "emptySequence": "Please enter sequence",
        "noFile": "Please select a sequence file",
        "emptySmiles": "Please enter substrate SMILES",
        "noSmilesFile": "Please select a SMILES file"
      }
    },
    "resultDisplay": {
      "loading": "Loading...",
      "predictionResult": "Prediction Result",
      "parameter": "Parameter",
      "predictedValue": "Predicted Value",
      "exportCsv": "Export CSV",
      "predictionInfo": "Prediction Info",
      "resultCount": "Total of {{total}} prediction results, showing first {{displayed}}",
      "proteinSequence": "Protein Sequence",
      "substrateSmiles": "Substrate SMILES",
      "confidenceInterval": "Confidence Interval",
      "reliabilityScore": "Reliability Score",
      "moreResults": "Total of {{total}} results, showing only first 10. Click 'Export CSV' to view all results.",
      "kcat": {
        "title": "Kcat Prediction Result",
        "predictedValue": "Predicted Kcat Value (s<sup>-1</sup>)"
      },
      "km": {
        "title": "Km Prediction Result",
        "predictedValue": "Predicted Value (mM)",
        "similarEnzymes": "Experimental Data of Similar Enzymes",
        "enzymeName": "Enzyme Name",
        "sequenceSimilarity": "Sequence Similarity",
        "experimentalKm": "Experimental Km (mM)"
      },
      "tm": {
        "title": "Tm Prediction Result",
        "predictedValue": "Predicted Value (°C)",
        "proteinFeatures": "Protein Feature Analysis",
        "aminoAcidComposition": "Amino Acid Composition",
        "secondaryStructure": "Secondary Structure Prediction",
        "isoelectricPoint": "Isoelectric Point"
      },
      "solubility": {
        "title": "Solubility Prediction Result",
        "predictedSolubility": "Predicted Solubility",
        "solubilityScore": "Solubility Score",
        "keyFactors": "Key Factors Affecting Solubility",
        "factor": "Factor",
        "score": "Score",
        "impact": "Impact Level"
      },
      "promoter": {
        "title": "Promoter Strength Prediction Result",
        "predictedStrength": "Predicted Relative Strength",
        "sequenceFeatures": "Sequence Feature Analysis",
        "minus10Box": "-10 box",
        "minus35Box": "-35 box",
        "gcContent": "GC Content"
      },
      "rbs": {
        "title": "RBS Translation Initiation Rate Prediction Result",
        "predictedRate": "Predicted Translation Rate",
        "sequenceFeatures": "Sequence Feature Analysis",
        "sdSequence": "Shine-Dalgarno Sequence",
        "sdDistance": "SD to Start Codon Distance",
        "mfeEnergy": "Secondary Structure Free Energy"
      }
    }
  },
  "predict": {
    "common": {
      "platformInfo": "Platform Note: This platform uses trained and validated machine learning models to ensure scientific accuracy of prediction results. The system does not use random simulation data, guaranteeing the rigor of predictions.",
      "inputProtein": "Input Protein Sequence",
      "useSample": "Use This Example",
      "submit": "Predicting...",
      "instructions": "Instructions",
      "resultInterp": "Result Interpretation",
      "error": "Prediction Request Failed",
      "errorTypes": {
        "modelNotFound": "Prediction service temporarily unavailable: Prediction model not loaded or does not exist. Please contact system administrator.",
        "scriptNotFound": "Prediction service temporarily unavailable: Prediction script not found. Please contact system administrator.",
        "unknown": "Unknown error occurred during prediction"
      }
    },
    "kcat": {
      "description": "Predict the catalytic constant (Kcat) of enzymatic reactions through deep learning models, aiding enzyme engineering design and optimization.",
      "sampleProtein": "Sample Protein Sequence",
      "proteinPlaceholder": "Enter protein amino acid sequence (FASTA format or pure sequence)",
      "inputSubstrate": "Input Substrate Information",
      "sampleSmiles": "Sample Substrate SMILES",
      "sampleSmilesName": "Paracetamol",
      "inputSmilesDirectly": "Enter SMILES Directly",
      "uploadSmilesFile": "Upload SMILES File",
      "smilesPlaceholder": "Enter substrate SMILES representation (e.g.: CC(=O)Nc1ccc(O)cc1)",
      "smilesFormatHelp": "Supports SMILES format for describing substrate structure, e.g. paracetamol: CC(=O)Nc1ccc(O)cc1",
      "predictButton": "Predict Kcat Value",
      "error": {
        "missingInput": "Please enter protein sequence and substrate SMILES, or upload corresponding files"
      },
      "toolDescription": "The Kcat prediction tool can predict the catalytic constant of a given protein enzyme for a specific substrate.",
      "inputParams": "Input Parameters",
      "inputParam": {
        "protein": "Protein sequence: Amino acid sequence of the enzyme",
        "substrate": "Substrate SMILES: SMILES representation of the substrate molecule"
      },
      "resultInterpretation": "Kcat value (s<sup>-1</sup>) represents the number of substrate molecules converted per second by each enzyme molecule. Prediction results include predicted value, confidence interval, and reliability score."
    },
    "km": {
      "title": "Km Prediction",
      "titleEn": "Km Prediction",
      "description": "Predict the Michaelis constant (Km) between enzymes and substrates through deep learning models, helping to understand enzyme-substrate affinity.",
      "sampleProtein": "Sample Protein Sequence",
      "proteinPlaceholder": "Enter protein amino acid sequence (FASTA format or pure sequence)",
      "inputSubstrate": "Input Substrate Information",
      "sampleSmiles": "Sample Substrate SMILES",
      "sampleSmilesName": "Paracetamol",
      "inputSmilesDirectly": "Enter SMILES Directly",
      "uploadSmilesFile": "Upload SMILES File",
      "smilesPlaceholder": "Enter substrate SMILES representation (e.g.: CC(=O)Nc1ccc(O)cc1)",
      "smilesFormatHelp": "Supports SMILES format for describing substrate structure, e.g. paracetamol: CC(=O)Nc1ccc(O)cc1",
      "predictButton": "Predict Km Value",
      "error": {
        "missingInput": "Please enter protein sequence and substrate SMILES, or upload corresponding files"
      },
      "toolDescription": "The Km prediction tool can predict the Michaelis constant of a given protein enzyme for a specific substrate.",
      "inputParams": "Input Parameters",
      "inputParam": {
        "protein": "Protein sequence: Amino acid sequence of the enzyme",
        "substrate": "Substrate SMILES: SMILES representation of the substrate molecule"
      },
      "resultInterpretation": "Km value (μM or mM) represents the substrate concentration at which the enzyme reaction rate reaches half of its maximum value. Lower Km values indicate stronger enzyme-substrate affinity. Prediction results include predicted value, confidence interval, and reliability score."
    },
    "tm": {
      "title": "T<sub>m</sub> Prediction",
      "titleEn": "Tm Prediction",
      "description": "Predict protein melting point (Tm) through deep learning models, helping to assess protein thermal stability.",
      "sampleProtein": "Sample Protein Sequence",
      "proteinPlaceholder": "Enter protein amino acid sequence (FASTA format or pure sequence)",
      "predictButton": "Predict Tm Value",
      "error": {
        "missingInput": "Please enter protein sequence or upload sequence file"
      },
      "toolDescription": "The Tm prediction tool can predict the melting point (Tm) value of a given protein.",
      "inputParams": "Input Parameters",
      "inputParam": {
        "protein": "Protein sequence: Amino acid sequence of the target protein"
      },
      "resultInterpretation": "Tm value (°C) represents the temperature at which 50% of the protein is in an unfolded state during thermal denaturation. Higher Tm values indicate better protein thermal stability. Prediction results include predicted value, confidence interval, and reliability score."
    },
    "solubility": {
      "title": "Solubility Prediction",
      "titleEn": "Solubility Prediction",
      "description": "Predict protein solubility in E. coli expression systems through deep learning models, helping to optimize protein expression conditions.",
      "sampleProtein": "Sample Protein Sequence",
      "proteinPlaceholder": "Enter protein amino acid sequence (FASTA format or pure sequence)",
      "predictButton": "Predict Solubility",
      "error": {
        "missingInput": "Please enter protein sequence or upload sequence file"
      },
      "toolDescription": "The protein solubility prediction tool can predict the solubility level of a given protein in E. coli expression systems.",
      "inputParams": "Input Parameters",
      "inputParam": {
        "protein": "Protein sequence: Amino acid sequence of the target protein"
      },
      "resultInterpretation": "Solubility scores range from 0 to 1, with higher values indicating better solubility when the protein is expressed in E. coli. Prediction results include predicted value, confidence interval, and reliability score."
    }
  }
}; 