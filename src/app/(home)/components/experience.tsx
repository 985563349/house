import ExperienceCard from '@/components/experience-card';

const experiences = [
  {
    company: 'BDY Tech',
    position: '高级前端工程师',
    employmentType: '全职',
    period: '2025.10 - 2026.06',
    duration: '9个月',
    descriptions: [
      '负责核心功能的开发与维护，持续完善产品能力与用户体验。',
      '为 Web 与移动端沉淀可复用组件，统一多端界面规范与交互体验。',
    ],
    skills: [
      'Next.JS',
      'WebSocket',
      'TanStack Query',
      'Zustand',
      'Tailwind CSS',
      'React Aria',
    ],
  },
  {
    company: '77ircloud',
    position: '高级前端工程师',
    employmentType: '全职',
    period: '2025.02 - 2025.09',
    duration: '8个月',
    descriptions: [
      '面向供应链运营场景开发 AI 助手功能，支持客户分析与留存策略生成。',
      '优化 AI 响应在文本、图表和表单中的呈现方式，帮助业务用户更高效地理解结果并采取行动。',
    ],
    skills: ['React', 'React Router', 'LangChain', 'LangSmith', 'RAG', 'Agent'],
  },
  {
    company: 'Candela',
    position: '前端工程师',
    employmentType: '全职',
    period: '2020.08 - 2024.12',
    duration: '4年5个月',
    descriptions: [
      '参与商业与医疗场景下的机器人运营平台开发，覆盖设备调度、资源协调等核心流程。',
      '构建可视化调度工作流与配置工具，帮助运营人员更快定位问题并处理复杂场景。',
      '优化前端构建与部署流程，提升系统性能和发布效率。',
    ],
    skills: [
      'React',
      'Ant Design',
      'React Flow',
      'Three.JS',
      'Docker',
      'GitLab CI',
    ],
  },
  {
    company: 'XinYiChen',
    position: '前端工程师',
    employmentType: '全职',
    period: '2018.09 - 2020.04',
    duration: '1年8个月',
    descriptions: [
      '参与企业管理系统开发，支持日常业务运营与内部协作流程。',
      '沉淀可复用业务组件与页面基础架构，提升后续功能开发的一致性和交付效率。',
    ],
    skills: ['Vue', 'ElementUI', 'ECharts'],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="space-y-6">
      <p className="text-3xl font-semibold tracking-tight">工作经历</p>

      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.position}`}
            {...experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
