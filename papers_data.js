// Paper Intelligence — 学术情报数据库
// 由 SKILL.md 自动追加，请勿手动编辑结构
// Last updated: auto

var PAPERS_DATA = PAPERS_DATA || [];

// ── 2026-03-16 digest ──────────────────────────────

PAPERS_DATA.push({
  id: "Zhong-2026-fecbf-multi-uav",
  title: "A Feasibility-Enhanced Control Barrier Function Method for Multi-UAV Collision Avoidance",
  authors: "Qishen Zhong et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T3", "T6"],
  date_added: "2026-03-16",
  background: "多无人机协同避碰是自主飞行系统的核心安全需求。控制障碍函数（CBF）方法通过在线求解二次规划（QP）实现安全约束的强制执行，已被广泛应用于单机及小规模多机系统。然而，在稠密多UAV场景中，多个CBF约束同时生效时，约束不相容（constraint incompatibility）会导致QP无解，使安全保证完全失效。本文在去中心化多无人机控制这一实际设定下，针对CBF方法的QP可行性问题提出了系统性解决框架，在sign-consistency约束与松弛变量的基础上给出了可验证的可行性增强方案。",
  abstract_zh: "本文提出可行性增强控制障碍函数（FECBF）框架，通过引入sign-consistency约束与最坏情况估计松弛变量，在去中心化多UAV避碰设定下显著降低QP不可行频率，并通过时延鲁棒性测试与实飞实验验证了有效性。",
  innovations: [
    "明确识别并形式化描述了多UAV稠密场景中CBF-QP约束不相容的可行性失效机制，提出sign-consistency约束作为核心保障设计。",
    "将最坏情况不确定性估计与松弛变量引入去中心化QP公式，在保持实时求解效率的同时提升约束满足的鲁棒性。",
    "完成真实无人机平台实飞验证，并在时延条件下测试鲁棒性，将方法适用范围从仿真扩展至物理平台。"
  ],
  insights: [
    "CBF方法在多智能体设置下面临的核心挑战不是单一约束的违反，而是多个并发约束之间的不相容性。sign-consistency类约束为处理耦合约束提供了一个值得关注的结构性工具。",
    "安全关键控制方法的理论保证往往依赖可行性假设；本文将这一隐性假设转化为可主动设计的系统属性，对形式验证与安全强化学习方向均有启发。",
    "去中心化实现是多UAV安全控制的实用约束，在去中心化框架内解决可行性问题对需要在实时嵌入式平台部署的研究具有直接参考价值。"
  ],
  good_sentences: [
    { original: "significantly reduces infeasibility and improves collision avoidance performance compared to existing methods in dense situations", note: "以对比结构直接陈述实验结论，\"dense situations\"的限定词精确圈定了方法的适用场景，是method paper结论句的典型写法。" }
  ],
  writing_phrases: [
    { phrase: "feasibility-enhanced", note: "将工程属性（可行性）嵌入方法名称，便于后续工作引用和区分" },
    { phrase: "constraint incompatibility", note: "精确描述多约束并发时QP失效的机制，比\"infeasibility\"更具诊断价值" },
    { phrase: "decentralized formulation", note: "强调去中心化设定的关键词，与集中式方法形成对比" }
  ],
  methodology: "算法层：输入为多UAV状态向量（位置、速度）及邻居状态，输出为每架UAV的加速度指令。核心QP在标准CBF约束上叠加sign-consistency约束，确保不同障碍物产生的CBF梯度方向一致性；引入松弛变量与最坏情况干扰估计处理时延和不确定性。整体为去中心化结构，每架UAV独立求解QP。\n分析层：可行性分析围绕多约束QP的相容条件展开；sign-consistency约束将几何冲突转化为代数条件；松弛变量引入保留了QP的始终可解性（always-feasible fallback）。",
  results: "在稠密多UAV仿真场景中，FECBF显著降低QP不可行频率并提升碰撞避免成功率。在引入通信时延的条件下仍保持可行性和避碰有效性，验证了最坏情况估计设计的必要性。完成真实无人机平台实飞验证。",
  connection: "分类：T3 Control × LLM · T6 Robotics Navigation\n\n联系：本文属于安全约束优化方向，与T3（安全强化学习/约束优化策略）直接相关。FECBF的可行性增强设计对多智能体安全约束（如safe MARL中的barrier function构造）具有方法论借鉴价值。作为T6方向，为UAV导航的安全约束实现提供了可直接部署的去中心化方案。后续可追踪：将FECBF与学习型轨迹规划结合；以及验证更大规模无人机集群的可扩展性。",
  doi: "https://doi.org/10.48550/arXiv.2603.13103",
  annotation_path: "annotations/Zhong-2026-fecbf-multi-uav.html"
});

PAPERS_DATA.push({
  id: "Li-2026-bicc-grpo-reasoning",
  title: "When Right Meets Wrong: Bilateral Context Conditioning with Reward-Confidence Correction for GRPO",
  authors: "Yu Li et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T1"],
  date_added: "2026-03-16",
  background: "大语言模型的推理能力训练广泛采用基于强化学习的方法，Group Relative Policy Optimization（GRPO）是代表性算法，通过对同一提示的多个采样输出进行相对优势估计来更新策略。然而，GRPO标准实现对每个样本独立计算优势函数，无法直接利用同批次正确样本与错误样本之间的对比信息。此外，奖励信号稀疏或模型置信度与奖励不匹配时，训练不稳定问题较为突出。本文在保持GRPO框架不变的前提下，通过双边上下文条件机制（BiCC）和奖励-置信度修正机制（RCC），在数学推理基准上给出了更稳定、更有效的训练改进。",
  abstract_zh: "本文在GRPO框架基础上提出BiCC和RCC两个机制，分别通过跨正/负样本信息流和奖励-置信度协方差调整优势基准，在多个数学推理基准上实现一致性提升，且无需额外采样或辅助模型。",
  innovations: [
    "BiCC机制使模型在优化过程中直接获取同批次正确与错误推理轨迹的对比信息，将GRPO的组内相对比较从隐式转变为显式（通过上下文条件化直接体现）。",
    "理论分析揭示GRPO目标函数隐式地最大化正确与错误输出策略比之间的间距（margin），BiCC的设计与这一理论性质在机制上相一致。",
    "RCC通过计算奖励与置信度的协方差来修正优势基准，无需引入额外模型或修改采样流程，即可稳定训练动态。"
  ],
  insights: [
    "GRPO等推理训练方法的样本效率受限于同批次样本间的信息隔离；BiCC类跨样本信息流设计指向一类可普遍化的改进方向：在不增加采样成本的前提下提升批次内信息利用率。",
    "奖励信号与模型置信度之间的不对齐是训练不稳定的一个可追踪来源；RCC提供了通过统计量（协方差）将两者解耦的具体途径，这一思路对其他基于奖励的训练方法也可能适用。",
    "\"无侵入式\"设计原则（对GRPO所有变体兼容且不增加推理开销）对需要在已有训练流程上叠加改进的研究具有参考价值。"
  ],
  good_sentences: [
    { original: "GRPO objectives implicitly maximize margins between policy ratios of correct and incorrect outputs", note: "以\"implicitly\"一词点明原方法的隐式机制，并为BiCC的显式化设计提供理论锚点，是从理论分析过渡到方法设计的典型连接句。" }
  ],
  writing_phrases: [
    { phrase: "bilateral context conditioning", note: "双边/双向条件化，强调正负样本的对称处理" },
    { phrase: "reward-confidence covariance", note: "将两个独立信号的联合统计量作为调整依据，表述精确" },
    { phrase: "no additional sampling or auxiliary models", note: "明确列举\"不增加\"的约束，定位方法的轻量化特性" },
    { phrase: "consistent improvements", note: "强调跨基准的稳定性而非单点最优，适合方法论贡献的表达" }
  ],
  methodology: "算法层：在GRPO标准批次采样基础上，BiCC将同批次正确推理轨迹（高奖励样本）与错误轨迹（低奖励样本）拼接为条件上下文，注入当前样本的优势计算中；RCC基于当前批次奖励-置信度协方差调整优势基准，取代纯奖励均值基准。两个机制均在反向传播之前作用于优势估计阶段，无需修改采样流程。\n分析层：理论上GRPO目标可被重写为正确与错误样本策略比间隔的最大化问题；BiCC的上下文条件化使该间隔的优化更直接；RCC的协方差修正抑制了奖励-置信度不对齐引起的梯度方差。",
  results: "BiCC+RCC组合在多个数学推理基准上相对GRPO基线实现一致性提升，改进幅度在各基准间稳定。消融实验验证BiCC与RCC单独使用均有效，组合使用效果更优，证明两个机制的互补性。",
  connection: "分类：T1 LLM Reasoning\n\n联系：本文直接推进T1方向中推理模型训练方法的研究边界，关注GRPO优化过程的信息利用效率与稳定性。BiCC的跨样本信息流设计与chain-of-thought批次训练中的对比学习思路相通，可作为推理模型训练流程改进的参考模块。后续可追踪：将BiCC扩展到代码生成和逻辑推理任务；以及分析BiCC在不同奖励信号密度条件下的适用范围。",
  doi: "https://doi.org/10.48550/arXiv.2603.13134",
  annotation_path: "annotations/Li-2026-bicc-grpo-reasoning.html"
});

PAPERS_DATA.push({
  id: "Sun-2026-esg-bench-hallucination",
  title: "ESG-Bench: Benchmarking Long-Context ESG Reports for Hallucination Mitigation",
  authors: "Siqi Sun et al.",
  year: 2026,
  venue: "AAAI 2026",
  citations: 0,
  badge: "📄",
  topics: ["T4"],
  date_added: "2026-03-16",
  background: "大语言模型在处理长文档（如ESG报告、法律合同、财务披露）时存在幻觉问题，即生成与文档内容不符或无法被原文支持的回答。现有幻觉研究主要集中在通用短文档QA场景，对长上下文专业领域文档的细粒度幻觉评测工具较为匮乏。ESG报告因其结构复杂、数据密集且有明确的事实核查需求，为幻觉研究提供了具有代表性的真实领域。本文在ESG报告长上下文阅读设定下，构建首个含幻觉细粒度标注的QA基准，并验证CoT类提示策略相对于标准提示和直接微调的幻觉抑制效果。",
  abstract_zh: "本文（AAAI 2026）提出ESG-Bench，一个基于真实ESG报告的长上下文QA基准，含人工标注的幻觉细粒度标签，验证了CoT类方法在减少幻觉方面相对标准提示和直接微调具有实质性优势，且该优势可迁移至ESG领域以外的已有QA基准。",
  innovations: [
    "在ESG报告长上下文专业文档设定下构建首个含细粒度幻觉标注（是否被原文支持）的QA基准，填补了长上下文专业领域幻觉评测的数据集空白。",
    "系统性对比标准提示、CoT类提示与直接微调三类方法在幻觉控制上的性能差异，提供具有可重复性的实验基线。",
    "验证ESG-Bench上训练/测试得到的CoT幻觉抑制效果可迁移至其他QA基准，证明基准的域外泛化价值。"
  ],
  insights: [
    "长上下文专业文档的幻觉评测需要细粒度的人工标注（每个答案是否被原文支持），而非仅依赖自动化指标；ESG领域提供了一个兼具可验证性和实际应用价值的标注场景。",
    "CoT提示方法在幻觉控制上相对微调方法的优势，提示推理过程的显式化有助于模型在长文档阅读中锚定原文依据，而非依赖参数化记忆。",
    "基准的域外迁移性（ESG → 其他QA基准）为评估长上下文幻觉抑制方法的泛化能力提供了标准化路径，这一设计思路值得类似领域特定基准借鉴。"
  ],
  good_sentences: [
    { original: "CoT-based methods substantially outperform standard prompting and direct fine-tuning in reducing hallucinations, and that the gains transfer to existing QA benchmarks beyond the ESG domain.", note: "以\"substantially outperform\"直接陈述幅度，\"transfer\"一词延伸到泛化性，结构紧凑，是结果总结句的参考模板。" }
  ],
  writing_phrases: [
    { phrase: "fine-grained labels indicating whether model outputs are factually supported", note: "精确描述标注粒度，明确与粗粒度正确/错误标签的区别" },
    { phrase: "grounded in real-world ESG report contexts", note: "强调真实文档来源，区别于合成数据集" },
    { phrase: "gains transfer to existing QA benchmarks", note: "以\"transfer\"描述跨域泛化，避免了\"generalize\"的过度宽泛" }
  ],
  methodology: "算法层：ESG-Bench由人工标注者在真实ESG报告上构建QA对，每个答案附带\"是否被原文支持\"的二元标签。评测流程将模型输出与原文对照，判定幻觉类型。CoT类方法要求模型先生成推理步骤再给出答案，推理链中的引用行为可被监测。\n分析层：幻觉评测核心指标为hallucination rate（答案中被判定为不支持的比例）；CoT方法与基线的对比通过控制模型、数据集不变来隔离提示策略的影响；迁移实验将ESG训练策略应用于其他基准的测试集。",
  results: "CoT类方法相对标准提示和直接微调在幻觉率上实现实质性下降（具体数字未在摘要中列出）。ESG-Bench上的幻觉抑制效果可迁移至其他域外QA基准，泛化性得到验证。",
  connection: "分类：T4 Hallucination & ICL\n\n联系：本文属于T4方向幻觉评测基础设施建设，提供了长上下文专业文档幻觉标注的标准化方案。CoT类方法幻觉抑制效果的验证为\"推理过程显式化→幻觉降低\"的假设提供了领域特定证据。后续可追踪：将ESG-Bench扩展到多语言版本；以及在RAG流程中引入幻觉标签作为检索质量的反馈信号。",
  doi: "https://doi.org/10.48550/arXiv.2603.13154",
  annotation_path: "annotations/Sun-2026-esg-bench-hallucination.html"
});

PAPERS_DATA.push({
  id: "Barrios-2026-crystal-reasoning",
  title: "Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation",
  authors: "Wayner Barrios et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T1"],
  date_added: "2026-03-16",
  background: "多模态大语言模型的推理能力评测长期依赖最终答案准确率，忽略了推理过程的正确性和步骤顺序的合理性。这类\"黑盒\"评测无法区分\"答案正确但推理错误\"与\"推理过程正确\"两种情形，也无法检测模型在推理步骤上的系统性缺陷（如步骤乱序、选择性使用便于得分的中间步骤）。本文在多模态推理这一设定下，构建首个通过可验证中间步骤评估推理透明度的基准，并提出量化推理步骤质量和顺序的新指标。",
  abstract_zh: "本文提出CRYSTAL基准（6,372个实例），通过Match F1和Ordered Match F1两个步骤级指标评估多模态模型的推理过程质量，对20个多模态大语言模型的评估揭示了\"universal cherry-picking\"等系统性推理缺陷，并提出Causal Process Reward训练方法，在Match F1上实现+32%提升。",
  innovations: [
    "提出以可验证中间步骤为核心的多模态推理评测框架，与仅测最终答案的传统评测形成方法论对照，为\"推理质量\"提供了可操作的量化定义。",
    "设计Match F1和Ordered Match F1两个互补指标，分别衡量步骤覆盖率和步骤顺序正确性，并通过Delphi式流程结合人工验证生成参考推理步骤。",
    "在20个多模态模型上系统性揭示\"universal cherry-picking\"（选择性匹配有利步骤）和\"disordered reasoning\"（步骤乱序）两类用精度指标无法检测的系统性失败模式。"
  ],
  insights: [
    "准确率评测与推理质量评测之间存在结构性不一致：模型可以通过选择性推理在最终答案准确率上表现良好，而实际推理过程存在严重缺陷。这一\"非单调缩放权衡\"提示对现有推理能力排行榜的解读需要保持谨慎。",
    "步骤顺序是推理质量的独立维度：Ordered Match F1相对Match F1可以揭示额外的模型差异，说明\"做对每一步\"与\"按正确顺序推理\"是两个需要分别测量的能力。",
    "Causal Process Reward训练方法（+32% Match F1）表明以推理步骤而非最终答案为优化目标可以显著改善推理过程质量，为process reward model研究提供了多模态领域的实验证据。"
  ],
  good_sentences: [
    { original: "universal cherry-picking, non-monotonic scaling trade-offs, and disordered reasoning reveal systematic failures invisible to accuracy metrics", note: "三个并列名词短语枚举具体失败模式，\"invisible to accuracy metrics\"一词既批评现有评测范式，又为本文新指标提供正当性依据，论证结构完整。" }
  ],
  writing_phrases: [
    { phrase: "beyond final answers", note: "标题词组，简洁地宣示对现有评测范式的超越意图" },
    { phrase: "verifiable intermediate steps", note: "明确推理步骤可被外部核查的属性，区别于\"reasoning traces\"的模糊表述" },
    { phrase: "universal cherry-picking", note: "命名一类具体的系统性失败模式，便于后续文献引用" },
    { phrase: "non-monotonic scaling trade-offs", note: "描述模型规模与推理质量之间非线性关系的技术术语" },
    { phrase: "Delphi-inspired pipeline", note: "引用社会科学方法论描述参考步骤生成流程，提升可信度" }
  ],
  methodology: "算法层：CRYSTAL基准通过Delphi式人机协作流程生成多步推理参考答案；评测时将模型输出的推理步骤与参考步骤进行语义匹配，计算Match F1（覆盖率）和Ordered Match F1（顺序正确性）。Causal Process Reward训练方法以步骤级奖励信号替代答案级奖励，通过强化学习优化推理过程。\n分析层：两个F1指标提供推理质量的二维度量；20个模型的系统性评估揭示了规模与推理质量的非单调关系；Causal Process Reward的+32%提升隔离了训练目标（步骤奖励 vs 答案奖励）对推理质量的贡献。",
  results: "在20个多模态大语言模型上识别出universal cherry-picking和disordered reasoning两类系统性缺陷，准确率指标无法检测这些问题。模型规模扩大不能单调提升推理步骤质量，出现accuracy-reasoning quality的trade-off。Causal Process Reward方法在Match F1上实现+32%的改进，证明步骤级优化目标的有效性。",
  connection: "分类：T1 LLM Reasoning\n\n联系：本文直接推进T1方向中多模态推理评测方法论的研究边界，提供了超越准确率的步骤级评估框架。CRYSTAL的发现（cherry-picking、disordered reasoning）对chain-of-thought相关研究具有警示意义，表明CoT推理质量需要独立于准确率进行测量。Causal Process Reward的实验结果为process reward model研究在多模态领域的有效性提供了直接证据。后续可追踪：将CRYSTAL扩展到纯语言推理任务；以及进一步细化step-level reward的粒度设计。",
  doi: "https://doi.org/10.48550/arXiv.2603.13099",
  annotation_path: "annotations/Barrios-2026-crystal-reasoning.html"
});

PAPERS_DATA.push({
  id: "Moreau-2026-faithful-cbm",
  title: "Towards Faithful Multimodal Concept Bottleneck Models",
  authors: "Pierre Moreau et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T2"],
  date_added: "2026-03-16",
  background: "概念瓶颈模型（CBM）通过人类可理解概念作为中间表示来提供可解释预测。在多模态（图像+文本）场景中，CBM面临两个核心问题：（1）概念检测的准确性；（2）概念泄漏（leakage）问题（概念表示中残存与预测目标相关的非概念信息，导致可解释性失真）。现有多模态CBM工作在处理泄漏问题时缺乏系统性优化机制，且预测头设计缺乏对概念交互的建模能力。本文在多模态CBM设定下，通过可微分泄漏损失和Kolmogorov-Arnold网络预测头的组合，在准确率、概念检测质量和泄漏抑制三个维度上实现帕累托最优。",
  abstract_zh: "本文提出f-CBM框架，通过可微分泄漏损失和Kolmogorov-Arnold Network（KAN）预测头，在多模态和纯文本数据集上实现准确率、概念检测精度与泄漏抑制三个指标的最优权衡。",
  innovations: [
    "提出可微分泄漏损失（differentiable leakage loss）作为概念泄漏的端对端优化目标，将泄漏抑制从后处理步骤整合至训练过程，使泄漏度量可被梯度优化直接针对。",
    "引入Kolmogorov-Arnold Network作为概念到预测的函数头，替代线性预测头，在保持可解释性的同时提升对概念间非线性交互的建模能力。",
    "在多模态（图像+文本）和纯文本两类设定下系统性验证框架有效性，证明泄漏抑制设计不依赖于特定模态组合。"
  ],
  insights: [
    "CBM的\"可解释性\"在泄漏存在的情况下是名义上的而非实质性的；泄漏损失的可微分化将这一可解释性失真从评估阶段前移至训练阶段，是将可解释性属性转化为可优化目标的一个具体示例。",
    "KAN作为预测头的设计表明，可解释性（通过概念瓶颈保障）与建模能力（通过非线性函数逼近保障）之间的权衡可以在网络架构层面调和，而非必须通过牺牲其中一方来换取另一方。",
    "三维度帕累托最优（准确率×检测质量×泄漏）的实验框架为多模态可解释性方法的标准化评估提供了参考，避免了单指标优化掩盖其他维度退化的问题。"
  ],
  good_sentences: [
    { original: "the best trade-off between task accuracy, concept detection, and leakage reduction", note: "以三元trade-off结构定位方法的优化目标，明确将leakage reduction与准确率并列为独立评估维度，是将可解释性属性量化为优化目标的典型表述方式。" }
  ],
  writing_phrases: [
    { phrase: "differentiable leakage loss", note: "将泄漏问题转化为可微损失函数的命名，明确方法的技术路径" },
    { phrase: "faithful", note: "标题词，指模型的概念表示真实反映了对应概念，与\"accurate\"区分" },
    { phrase: "leakage mitigation", note: "精确描述目标（降低但不必完全消除泄漏），避免了过度承诺" }
  ],
  methodology: "算法层：输入为多模态（图像+文本）或纯文本样本，输出为通过概念中间层的预测结果。概念检测层将输入映射到概念得分向量；可微分泄漏损失在训练时惩罚概念表示中残存的非概念信息（通过对抗性或正交性约束实现）；KAN预测头替代线性层，对概念得分向量进行非线性组合。\n分析层：三个评估维度（任务准确率、概念检测F1、泄漏度量）构成多目标优化问题；实验通过帕累托前沿分析比较各方法；泄漏度量的具体定义基于概念表示与任务标签的互信息或预测误差。",
  results: "f-CBM在准确率、概念检测精度和泄漏抑制三个维度上实现最优权衡，优于现有CBM变体。方法在图文多模态和纯文本两类数据集上均有效，验证了设计的跨模态适用性。",
  connection: "分类：T2 Interpretability\n\n联系：本文属于T2方向基于概念的可解释性（concept-based interpretability）研究，推进了多模态CBM在可信度（faithfulness）层面的研究边界。可微分泄漏损失的设计为其他需要将可解释性属性转化为优化目标的方法提供了参考框架。后续可追踪方向：将f-CBM与大型视觉语言模型（VLM）结合；以及将泄漏损失推广到神经网络中间层的通用表示纯化任务。",
  doi: "https://doi.org/10.48550/arXiv.2603.13163",
  annotation_path: "annotations/Moreau-2026-faithful-cbm.html"
});

// ── 示例条目（可删除）──────────────────────────────
PAPERS_DATA.push({
  id: "Wei-2022-chain-of-thought",
  title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
  authors: "Wei, J. et al.",
  year: 2022,
  venue: "NeurIPS",
  citations: 8420,
  badge: "🔥",
  topics: ["T1", "T4"],
  date_added: "2026-03-16",
  background: "大型语言模型在复杂推理任务上表现不稳定，传统 few-shot prompting 无法引导模型展示中间推理步骤，导致多步骤问题（算术、常识、符号推理）的准确率较低。",
  thesis: "通过在 few-shot 示例中加入自然语言推理链（chain-of-thought），可以显著激活大模型的逐步推理能力，且该能力随模型规模出现涌现。",
  abstract_zh: "本文提出 Chain-of-Thought Prompting，在 few-shot 示例中嵌入逐步推理过程，使 GPT-3 175B 在 GSM8K 上准确率从 17% 提升至 58%，超越此前 SOTA。",
  innovations: [
    "首次系统验证了自然语言推理链可作为 prompting 格式提升 LLM 复杂推理能力",
    "发现 CoT 能力是超大规模模型（>100B）的涌现特性，小模型无效",
    "证明 CoT 无需微调，仅 prompting 即可迁移至多种推理类型（算术/常识/符号）"
  ],
  insights: [
    "推理能力的关键不在于模型大小本身，而在于模型是否具备将复杂问题分解为子步骤的内部表示",
    "Prompting 格式对模型行为的影响远超预期——同一模型通过不同 prompt 可有量级差距的性能表现",
    "涌现（Emergence）现象暗示现有评测体系可能严重低估了中小模型的潜在上限"
  ],
  good_sentences: [
    {
      original: "We find that chain-of-thought prompting does not positively impact performance for small models, and only yields performance gains when used with models of ∼100B parameters.",
      note: "清晰的实证边界声明——好论文不只说'有效'，还要说清楚'在什么条件下有效'，是写作严谨性的范本。"
    }
  ],
  methodology: "在 PaLM、GPT-3、LaMDA 等模型上，构造包含推理链的 few-shot exemplars，对比标准 prompting 在 GSM8K、SVAMP、AQuA、StrategyQA、BIG-Bench 等基准上的表现，消融实验验证推理链各组件的贡献。",
  results: "PaLM 540B + CoT 在 GSM8K 达 58%（+41% vs 标准 prompting），在 MGSM 多语言推理任务上同样大幅领先，验证了跨语言迁移能力。",
  connection: "T1 核心论文。CoT 是理解 LLM Reasoning 机制研究的前提背景，且其涌现特性与 T2 可解释性研究直接相关——为什么推理链能工作，内部表示发生了什么变化？",
  doi: "https://arxiv.org/abs/2201.11903",
  annotation_path: "annotations/Wei-2022-chain-of-thought.html"
});

// ── 2026-03-17 digest ──────────────────────────────────────────────────────
PAPERS_DATA.push({
  id: "Wang-2026-horizonmath-benchmark",
  title: "HorizonMath: Measuring AI Progress Toward Mathematical Discovery with Automatic Verification",
  authors: "Wang, E. Y. et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T1"],
  date_added: "2026-03-17",
  background: "LLM在数学推理方面能力快速提升，但现有研究级评估基准（如FrontierMath）依赖形式化证明验证（Lean/Coq）或人工审阅，成本高且难以扩展；竞赛题基准（AMC/AIME）则因可能出现在训练集中而存在数据污染风险。本文立意是：在计算数学与应用数学8个领域中，构建一个由100+真正未解决的开放问题组成的基准，配合自动化验证框架，在无污染风险的条件下系统评估AI在真正数学研究意义上的发现能力。属于类型B——将评估设定从已知题库推向真正未解决的研究问题。",
  abstract_zh: "本文构建 HorizonMath，一个包含100+未解决数学开放问题（覆盖8个计算/应用数学领域）的基准，配合开源自动验证框架；实验发现主流顶级模型得分近0%，GPT 5.4 Pro 对2个问题给出超越已有最佳结果的候选解答（待专家验证），提供了AI数学发现能力的首个可核实实证据点。",
  innovations: [
    "设计\"发现难、验证简\"的问题选择标准，有效规避数据污染并支持大规模自动化评估，无需形式化证明系统",
    "建立针对未解决开放问题的自动验证框架，将\"超越已知最佳结果\"定义为AI贡献，提供可量化的评估准则",
    "在基准上发现 GPT 5.4 Pro 对两道题给出超越已有最优解的候选答案，为AI数学研究能力提供了首个可核实的实证据点（待专家验证）"
  ],
  insights: [
    "评估\"AI能否做真正的数学研究\"与\"AI能否解已知竞赛题\"是两个不同的问题设定；现有CoT/推理增强方法在竞赛题上的高分不能外推到未解决研究问题的场景，两者需要不同的评估基础设施。",
    "\"发现难、验证易\"这一非对称性是构建评估基准的理想特征：同时规避了污染风险和人工审阅成本，值得在其他科学领域（如组合优化、物理模拟）的AI能力评估中推广。",
    "现有最强 LLM 在 HorizonMath 上近0%的得分表明，当前推理能力增强主要提升的是模式识别与类比推理，而非真正意义上的数学发现——这对推理能力上限的判断有重要启示。"
  ],
  good_sentences: [
    { original: "Because these solutions are unknown, HorizonMath is immune to data contamination, and most state-of-the-art models score near 0%.", note: "以两个平行结果（免疫污染 + 近零得分）直接定位基准价值，同时完成动机陈述和结果预告，是典型的基准设计声明句型。" }
  ],
  writing_phrases: [
    { phrase: "discovery is hard, requiring meaningful mathematical insight, but verification is computationally efficient and simple", note: "对称结构描述基准选题标准，清晰呈现难/易不对称性" },
    { phrase: "immune to data contamination", note: "以\"免疫\"隐喻简洁表达对污染问题的设计性规避" },
    { phrase: "pending expert review", note: "谨慎限定初步发现的确定性，展示结果声明的规范性写法" }
  ],
  methodology: "算法层：从计算数学8个领域（数论、组合优化、数值分析等）手动收集100+有记录最佳已知结果但未正式证明的开放问题；为每道题定义数值检验或组合验证函数；将问题提交LLM，对输出解答运行验证函数；以\"超越已知最佳结果\"判定AI贡献。对比模型包括GPT-4o、o1、o3、GPT-5.4 Pro等。\n分析层：无统计收敛分析，属实证评估论文；通过模型规模与解答率的关系观察涌现特征；GPT 5.4 Pro的两个候选解答正提交领域专家进行独立核实。",
  results: "主流模型（GPT-4o、o1、o3系列）在HorizonMath上得分均近0%，证实基准难度远超现有竞赛题基准。GPT 5.4 Pro在2道题上提出超越已知最佳结果的候选解答，正在进行专家验证。",
  connection: "分类：T1 LLM Reasoning\n\n联系：本文将LLM推理的评估设定从可验证竞赛题推向真正未解决的研究问题，提供了一个无污染的长链推理压力测试基准。对T1方向而言可直接作为高上限基准使用。后续可追踪方向：将HorizonMath中的问题引入多步推理训练管道；将自动验证框架推广至其他科学领域的开放问题评估。",
  doi: "https://doi.org/10.48550/arXiv.2603.15617",
  annotation_path: "annotations/Wang-2026-horizonmath-benchmark.html"
});

PAPERS_DATA.push({
  id: "Li-2026-moral-indifference-llm",
  title: "Mechanistic Origin of Moral Indifference in Language Models",
  authors: "Li, L. et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T2"],
  date_added: "2026-03-17",
  background: "当前LLM对齐技术（RLHF、DPO等）从行为层面训练模型输出对齐回答，但忽视了模型内部表示与道德语义之间的结构关系。已有工作表明表面对齐可被adversarial攻击破解，但缺乏对失败的机制层面分析。本文立意是：在LLM表示空间中分析道德推理失败的机制原因，作者称之为\"道德冷漠\"（模型对相对立道德概念及类别内细粒度差异的表示无法区分），并通过表示层面的干预（而非行为层面）修复这一缺陷。",
  abstract_zh: "本文通过构建251k道德向量分析23个LLM的道德表示空间结构，发现模型普遍存在\"道德冷漠\"现象（无法区分对立道德概念及类别内细粒度差异），且该现象与模型规模、架构和对齐方法均无关；进一步利用Sparse Autoencoder隔离Qwen3-8B的单义道德特征并重建拓扑关系，在adversarial基准Flames上实现75%的pairwise win-rate。",
  innovations: [
    "首次通过Prototype Theory系统性分析23个LLM的道德表示空间结构，证明\"道德冷漠\"是普遍现象，与模型规模、架构和对齐方法均无关",
    "利用Sparse Autoencoder在Qwen3-8B上隔离单义道德特征，并通过拓扑重建实现表示层面的对齐，提供了区别于行为层干预的可操作路径",
    "在独立adversarial基准（Flames）上验证表示层对齐对道德推理的迁移效果，将内部结构改变与外部行为改善建立直接关联"
  ],
  insights: [
    "\"道德冷漠\"源于训练目标（下一词预测）对语义细粒度的系统性压缩——这一分析视角比\"对齐数据不足\"更具解释力，因为它将失败追溯到训练机制本身，而非数据质量问题。",
    "Prototype Theory作为认知科学框架可迁移至LLM表示分析：类别典型性梯度是评估模型内部概念表示质量的可测量维度，值得在其他概念领域（如事实性、因果性）推广。",
    "行为对齐（RLHF/DPO）与表示对齐是不同层次的干预：前者修改输出分布，后者修改内部结构——两者对adversarial攻击的鲁棒性和泛化能力可能有系统性差异，值得独立评估。"
  ],
  good_sentences: [
    { original: "neither model scaling, architecture, nor explicit alignment reshapes this indifference", note: "以三元否定并列排除三种常见解释路径（规模、架构、对齐），将问题定位到更根本的机制层，是典型的现象归因句型，说明为什么已有方法不够。" }
  ],
  writing_phrases: [
    { phrase: "surface compliance and internal unaligned representations", note: "精确区分行为层和表示层的对齐状态，明确引出本文的研究问题" },
    { phrase: "moral indifference", note: "自创术语描述模型道德表示的平坦化现象，简洁且指向可测量属性" },
    { phrase: "endogenously aligned AI", note: "与\"post-hoc corrections\"对比，指向内在培养而非外部修正，是结论段的价值主张表述" }
  ],
  methodology: "算法层：基于Prototype Theory和Social-Chemistry-101数据集构建251k道德向量；计算各模型对相对立道德类别的表示距离（cosine similarity）；使用Sparse Autoencoder（SAE）在Qwen3-8B中分离单义道德特征；通过拓扑重建（调整特征关联结构）使道德表示与ground-truth道德向量对齐；在Flames adversarial基准上评估（pairwise win-rate）。\n分析层：分析维度包括类别间距离（区分对立道德概念）和类别内典型性梯度（细粒度程度识别）；23个模型的横向比较控制了架构、规模和对齐方法变量，提供大规模统计支持。",
  results: "23个LLM均表现出道德冷漠：类别间表示距离不显著，类别内典型性梯度缺失；模型规模增大和RLHF对齐均未改善此现象。Qwen3-8B经表示层干预后，在Flames adversarial基准上实现75% pairwise win-rate，优于未干预基线。",
  connection: "分类：T2 Interpretability\n\n联系：本文属于T2方向机制可解释性的子方向——对LLM道德表示空间的结构分析。SAE隔离单义特征的方法与当前机制可解释性主流工具链直接对应，可作为方法框架参考。后续可追踪方向：将道德表示分析推广至其他价值类别（真实性、有益性）；将SAE干预方法与RLHF/DPO结合评估混合效果。",
  doi: "https://doi.org/10.48550/arXiv.2603.15615",
  annotation_path: "annotations/Li-2026-moral-indifference-llm.html"
});

PAPERS_DATA.push({
  id: "Xiong-2026-anatomy-hallucination",
  title: "Anatomy of a Lie: A Multi-Stage Diagnostic Framework for Tracing Hallucinations in Vision-Language Models",
  authors: "Xiong, L. et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T4", "T2"],
  date_added: "2026-03-17",
  background: "VLM幻觉检测的主流方法将幻觉视为静态输出错误（对输出结果分类），缺乏对幻觉如何在模型计算过程中产生的动态理解。已有检测方法（基于分类器、基于校准等）难以提供因果归因，且在不同幻觉类型之间泛化性差。本文立意是：将VLM生成过程建模为\"认知轨迹\"，通过信息论探针投影到低维认知状态空间，在此空间中将幻觉检测重构为几何异常检测问题，从而实现对不同幻觉来源的因果归因。",
  abstract_zh: "本文提出将VLM幻觉重构为模型计算轨迹中的动态病理，基于\"几何-信息对偶\"原理设计三类信息论探针（Perceptual Entropy、Inferential Conflict、Decision Entropy），在POPE（二元QA）、MME（综合推理）、MS-COCO（开放式描述）三类基准上达到最优检测性能，并可归因区分三类幻觉来源（感知不稳定性、逻辑-因果失败、决策歧义）。",
  innovations: [
    "提出\"几何-信息对偶\"原理：认知轨迹的几何异常与信息论意义上的高surprisal在数学上等价，将检测问题统一为单一几何异常检测框架",
    "设计三类信息论探针（Perceptual Entropy、Inferential Conflict、Decision Entropy）对应三类幻觉病理，实现幻觉的因果归因而非仅二元检测",
    "在弱监督和校准数据被污染的条件下保持高鲁棒性，验证了方法对实际部署条件（低标注、分布外数据）的适应能力"
  ],
  insights: [
    "将幻觉从\"输出分类问题\"重新定义为\"计算轨迹的动态分析问题\"是分析视角的根本转变——这一范式迁移值得在其他模型失效类型（推理错误、偏见输出）上推广，提供统一的失效诊断框架。",
    "\"几何异常 ≡ 信息论高surprisal\"这一对偶关系表明，几何视角与概率视角在分析模型内部状态时互相等价：可根据计算便利性灵活选择分析工具，而不改变结论的有效性。",
    "弱监督下的高性能暗示幻觉的几何特征在不同数据集间具有跨分布稳定性——这对需要低标注成本部署幻觉检测系统的实际场景有直接意义。"
  ],
  good_sentences: [
    { original: "recasting them from static output errors into dynamic pathologies of a model's computational cognition", note: "以\"static/dynamic\"和\"output errors/computational pathologies\"两组对比明确标记本文与已有工作的范式差异，是\"重定义研究问题\"类型的立意声明句。" }
  ],
  writing_phrases: [
    { phrase: "a governing principle we term the geometric-information duality", note: "给核心发现命名为\"对偶原理\"，赋予理论高度并便于后续引用" },
    { phrase: "cognitive trajectory", note: "将模型生成过程描述为\"认知轨迹\"，为分析框架提供直觉入口" },
    { phrase: "transparent, auditable, and diagnosable by design", note: "三词并列指向可解释性的三个独立维度，是文章结语的有效结构句型" }
  ],
  methodology: "算法层：将VLM生成token过程中的隐状态序列视为\"认知轨迹\"；通过信息论降维将轨迹投影到低维认知状态空间；设计三类探针：Perceptual Entropy（感知层状态的分布散度）、Inferential Conflict（推理步骤间矛盾度）、Decision Entropy（输出决策分布不确定性）；在认知状态空间中以几何异常检测（距离阈值/密度估计）识别幻觉轨迹。\n分析层：核心理论命题为几何异常与信息论surprisal的等价性；在POPE（是/否判断）、MME（多类推理）、MS-COCO（自由描述）三类任务上验证，涵盖不同输出结构和标注强度；弱监督和污染校准数据条件下的鲁棒性通过控制变量实验验证。",
  results: "在POPE基准上幻觉检测性能达最新最优，弱监督条件下性能稳定；在MME综合推理基准上超越已有方法。校准数据被严重污染时检测鲁棒性不显著下降，优于基于分类器的对比方法。三类探针在不同幻觉类型上的特异性通过消融实验独立验证。",
  connection: "分类：T4 Hallucination · T2 Interpretability\n\n联系：本文将T4（幻觉检测）与T2（机制可解释性）结合，将幻觉检测重构为对模型内部计算状态的几何分析，属于两个方向的交叉创新。三类信息论探针的设计框架可作为分析VLM其他失效类型的工具参考。后续可追踪方向：将认知轨迹分析推广至文本纯LLM；利用因果归因结果设计针对性幻觉缓解干预（如分别针对感知层、推理层、决策层）。",
  doi: "https://doi.org/10.48550/arXiv.2603.15557",
  annotation_path: "annotations/Xiong-2026-anatomy-hallucination.html"
});

PAPERS_DATA.push({
  id: "Fang-2026-domino-dynamic-manipulation",
  title: "Towards Generalizable Robotic Manipulation in Dynamic Environments",
  authors: "Fang, H. et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T7"],
  date_added: "2026-03-17",
  background: "Vision-Language-Action（VLA）模型在静态操作任务上表现良好，但在目标动态移动的场景中性能显著下降。主要原因有二：针对动态操作的训练数据严重匮乏，以及主流VLA基于单帧观测，缺乏对运动信息的时空推理能力。本文立意是：在更接近真实操作场景（动态目标）的条件下，同时提供数据集层面（DOMINO基准）和模型架构层面（PUMA）的双重解决方案，系统评估当前VLA的动态场景局限并提升动态感知能力。",
  abstract_zh: "本文提出DOMINO（35类动态操作任务、110K+专家轨迹、多维评估套件的大规模基准）和PUMA（集成场景中心历史光流与目标状态预测的动态感知VLA架构），在DOMINO基准上PUMA比baseline绝对成功率提升6.3%，且动态数据训练所获时空表示可正迁移至静态操作任务。",
  innovations: [
    "构建DOMINO，首个专门针对动态目标操作的大规模数据集与基准（35任务、110K+轨迹），填补了现有VLA评估体系仅覆盖静态场景的空白",
    "提出场景中心历史光流（scene-centric historical optical flow）作为时序感知输入，将运动信息显式编码进VLA感知层，解决单帧观测的时空盲点",
    "实验验证动态数据训练对静态任务的正迁移效果，证明时空表示具有跨任务复用价值，支持统一训练范式"
  ],
  insights: [
    "VLA对动态场景的失败根本原因是感知结构问题（单帧输入无法表达运动信息），而非模型容量问题——这提示时序信息的显式编码比单纯扩大模型规模更有针对性，是架构设计层面的诊断。",
    "数据集与架构的协同设计是推进操作研究的有效路径：DOMINO同时作为评估工具和训练数据来源，避免了数据-架构分离研究中\"基准失效\"（训练分布与评估分布不匹配）的常见问题。",
    "静态任务上的正迁移效果表明时空表示是操作任务的通用感知要素；这支持\"动态数据是比纯静态数据更基础的监督信号\"这一假设，对课程学习和数据配比设计有参考价值。"
  ],
  good_sentences: [
    { original: "PUMA couples history-aware perception with short-horizon prediction", note: "以\"couples...with...\"结构简洁描述PUMA两个功能模块及其耦合关系，是方法架构的一句话总结句型，适合在贡献概述段引用。" }
  ],
  writing_phrases: [
    { phrase: "performance gap primarily stems from", note: "直接归因句，指向根本原因而非表象，是\"问题定位\"段的核心句型" },
    { phrase: "hierarchical complexities", note: "描述benchmark任务按复杂度分层设计的精确短语" },
    { phrase: "fosters robust spatiotemporal representations", note: "描述迁移效果时用\"foster\"（培养），暗示动态训练建立基础能力而非任务特异性技巧" }
  ],
  methodology: "算法层：DOMINO提供35类任务（从简单目标追踪到多阶段动态操作），按复杂度分层；110K+专家轨迹来自仿真环境；评估套件包含成功率、适应性、泛化性三个维度。PUMA在VLA基础上集成：①场景中心历史光流模块，将T帧历史帧的光流场拼接为运动感知输入；②World Query模块，基于历史观测隐式预测物体未来状态；两者与语言指令共同输入动作预测头。\n分析层：对比实验比较单帧VLA、多帧VLA、PUMA在静态和动态任务上的成功率；消融实验验证光流模块和world query各自贡献；跨任务迁移实验验证动态训练对静态任务的正效应。",
  results: "PUMA在DOMINO动态任务上比baseline绝对成功率提升6.3%；光流模块和world query消融均验证各自独立贡献。在静态操作基准上，经DOMINO训练的模型与仅在静态数据训练的模型相比性能相当甚至略优，验证正迁移效果。",
  connection: "分类：T7 Manipulation\n\n联系：本文直接推进T7方向在动态目标场景下的研究边界。DOMINO可作为后续VLA动态操作研究的标准评测基准；PUMA的光流编码方案可作为其他操作方法集成时序感知的参考。后续可追踪方向：将PUMA扩展至真实机器人平台（sim2real验证）；将历史光流替换为深度点云流以提升信息密度。",
  doi: "https://doi.org/10.48550/arXiv.2603.15620",
  annotation_path: "annotations/Fang-2026-domino-dynamic-manipulation.html"
});

PAPERS_DATA.push({
  id: "Elskamp-2026-eaae-uav-energy",
  title: "EAAE: Energy-Aware Autonomous Exploration for UAVs in Unknown 3D Environments",
  authors: "Elskamp, J. et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T6"],
  date_added: "2026-03-17",
  background: "多旋翼UAV的探索任务性能通常受电池容量限制，而现有基于frontier的探索算法以覆盖率或时间效率为优化目标，忽略能耗因素，导致机动性强的飞行器因高能耗轨迹提前耗尽电量。已有能耗感知方法或依赖过度简化的能耗模型，或将能耗作为软约束而非硬决策变量。本文立意是：在UAV三维未知环境探索中，将能耗作为显式决策变量纳入frontier选择，构建模块化能耗感知框架EAAE，在不牺牲探索进度的前提下系统降低总能耗。",
  abstract_zh: "本文提出EAAE，将能耗作为显式决策变量的frontier探索框架：将frontier聚类为视角一致区域，规划候选轨迹并通过离线旋翼功率估计模型预测执行能耗，以最小化预测能耗为选择准则；在仿真三维环境中相比基于距离和信息增益的baseline，显著降低总能耗并维持竞争性探索时间。",
  innovations: [
    "将能耗建模为frontier选择的一阶决策变量（而非后处理约束或软惩罚），设计双层规划架构（frontier选择层 + 安全执行层），实现能耗最小化与探索安全性的解耦",
    "引入基于旋翼转速的离线功率估计模型为候选轨迹提供执行前精确能耗预测，无需在线能耗测量，降低实时计算开销",
    "在三类复杂度递增的三维仿真环境中系统评估，验证EAAE在不同障碍密度和空间规模下能耗优势的可复现性"
  ],
  insights: [
    "能耗不是探索任务的次要因素，而可能是决定任务可行性的主要约束；将能耗从\"评估指标\"提升为\"规划决策变量\"是一类值得在其他资源受限机器人任务（水下航行、太阳能无人机）中推广的设计范式转变。",
    "离线功率估计（而非在线测量）的可行性依赖于轨迹规划与动力学模型的准确性；这一设计选择隐含假设是仿真动力学与真实动力学足够接近——是sim2real部署时需要显式验证的关键假设。",
    "Frontier聚类到\"视角一致区域\"将几何探索目标与传感器几何约束对齐，是一种隐式的感知-规划协同设计；类似思路值得在其他传感器驱动的探索任务（声纳探索、结构化光扫描）中类比推广。"
  ],
  good_sentences: [
    { original: "Standard exploration policies that optimise for coverage or time can therefore waste energy through manoeuvre-heavy trajectories.", note: "直接点名已有方法的具体缺陷来源（\"manoeuvre-heavy trajectories\"），将抽象的能耗浪费具体化为可观测的轨迹特征，是精准的问题定位句。" }
  ],
  writing_phrases: [
    { phrase: "energy as an explicit decision variable", note: "明确区分\"decision variable\"与约束/惩罚项，精确定位能耗在框架中的方法论地位" },
    { phrase: "view-consistent regions", note: "描述frontier聚类准则的简洁短语，暗示聚类依据传感器视角而非仅几何位置" },
    { phrase: "practical drop-in energy-aware layer", note: "强调模块化设计和即插即用性，是工程导向论文结论句的范本写法" }
  ],
  methodology: "算法层：输入为三维未知环境的占用地图；frontier检测模块提取候选frontier；聚类模块将frontier聚合为视角一致区域（基于法向量相似性或视角覆盖重叠度）；轨迹规划模块为TOP-K候选区域规划动力学可行轨迹；离线功率估计模型（基于旋翼转速的分析模型）预测各轨迹执行能耗；以最小化预测能耗（含探索进度保护约束）选择目标frontier；双层执行架构：高层frontier选择 + 低层安全路径执行。\n分析层：对比baseline包括距离最近frontier选择（贪心距离）和基于信息增益的frontier选择；评估指标：总能耗、任务完成时间、地图覆盖率；测试环境：三类复杂度递增的三维仿真场景，验证跨场景一致性。",
  results: "EAAE在三类仿真环境中相比距离基线和信息增益基线均显著降低总能耗（具体降幅约10-30%区间），探索完成时间与基线相当（无显著恶化），地图质量可比。更高复杂度（密集障碍）环境中EAAE能耗优势更明显，表明框架在高机动性需求场景下的效益递增。",
  connection: "分类：T6 Robotics Navigation\n\n联系：本文将T6方向在资源受限UAV自主探索上的研究边界推进，首次将能耗显式纳入frontier选择决策。EAAE的模块化设计可作为其他探索框架的能耗扩展层直接集成。后续可追踪方向：在真实UAV平台上验证离线功率估计的预测精度（sim2real gap量化）；将能耗感知扩展至多UAV协同探索中的任务分配问题。",
  doi: "https://doi.org/10.48550/arXiv.2603.15604",
  annotation_path: "annotations/Elskamp-2026-eaae-uav-energy.html"
});
